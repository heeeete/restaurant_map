const { pool } = require("../../config/database");
const { logger } = require("../../config/winston");
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret");

const indexDao = require("../dao/indexDao");
const { add } = require("winston");

exports.checkDuplicate = async function (req, res) {
	const { userID } = req.body;

	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			const checkDuplicate = await indexDao.checkDuplicate(connection, userID);
			if (checkDuplicate === 400) {
				return res.send({
					isSuccess: false,
					code: 400,
					message: "중복되는 아이디 입니다.",
				});
			}
			return res.send({
				isSuccess: true,
				code: 200,
				message: "중복없음",
			});
		} catch (err) {
			logger.error(`checkDuplicate Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(
			`checkDuplicate DB Connection error\n: ${JSON.stringify(err)}`
		);
		return false;
	}
};

//로그인 유지
exports.readJwt = async function (req, res) {
	const { userIdx, nickname } = req.verifiedToken;

	return res.send({
		result: { userIdx: userIdx, nickname: nickname },
		code: 200,
		message: "유효한 토큰입니다.",
	});
};

//로그인
exports.createJwt = async function (req, res) {
	const { userID, password } = req.body;

	if (!userID || !password) {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "회원정보를 입력해주세요.",
		});
	}
	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			const [rows] = await indexDao.isVaildUsers(connection, userID, password);

			if (rows.length < 1) {
				return res.send({
					isSuccess: false,
					code: 410,
					message: "로그인에 실패 하였습니다.",
				});
			}
			const { userIdx, nickname } = rows[0];
			const token = jwt.sign(
				{
					userIdx: userIdx,
					nickname: nickname,
				},
				secret.jwtsecret
			);
			return res.send({
				result: { jwt: token },
				isSuccess: true,
				code: 200, // 요청 실패시 400번대 코드
				message: "로그인 성공",
			});
		} catch (err) {
			logger.error(`createJwt Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(`createJwt DB Connection error\n: ${JSON.stringify(err)}`);
		return false;
	}
};

exports.createUsers = async function (req, res) {
	const { userID, password, nickname } = req.body;

	const userIDRegExp = /^[a-z]+[a-z0-9]{5,19}$/; // 아이디 정규식 영문자로 시작하는 영문자 또는 숫자 6-20
	const passwordRegExp =
		/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/; // 비밀번호 형식: 8-16 숫자 특수문자 영문자 조합
	const nicknameRegExp = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/; // 닉네임 정규식 2-10 한글, 숫자 또는 영문

	if (!userIDRegExp.test(userID)) {
		return res.send({
			isSuccess: false,
			code: 400,
			message:
				"아이디 형식이 올바르지 않습니다. 영문자로 시작하고 영문자 또는 숫자 6~20",
		});
	}
	if (!passwordRegExp.test(password)) {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "비밀번호 형식이 올바르지 않습니다. 문자 또는 숫자 8~16",
		});
	}
	if (!nicknameRegExp.test(nickname)) {
		return res.send({
			isSuccess: false,
			code: 410,
			message: "닉네임 형식이 올바르지 않습니다. 한글, 숫자 또는 영문 2~10",
		});
	}

	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			//아이디 중복 검사 만들어야함
			const checkDuplicate = await indexDao.checkDuplicate(
				connection,
				userID,
				nickname
			);
			if (checkDuplicate === 400) {
				return res.send({
					isSuccess: false,
					code: 400,
					message: "중복되는 아이디 입니다.",
				});
			}
			if (checkDuplicate === 410) {
				return res.send({
					isSuccess: false,
					code: 410,
					message: "중복되는 닉네임 입니다.",
				});
			}

			const [rows] = await indexDao.insertUsers(
				connection,
				userID,
				password,
				nickname
			);
			const userIdx = rows.insertId;
			const token = jwt.sign(
				{
					userIdx: userIdx,
					nickname: nickname,
				},
				secret.jwtsecret
			);

			return res.send({
				result: { jwt: token },
				isSuccess: true,
				code: 200,
				message: "회원가입 성공",
			});
		} catch (err) {
			logger.error(`createUsers Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(`createUsers DB Connection error\n: ${JSON.stringify(err)}`);
		return false;
	}
};

//students 조회
exports.readRestaurants = async function (req, res) {
	const { city } = req.query;

	if (city) {
		const citys = [
			"홍대",
			"연남",
			"신림",
			"서울대입구",
			"이수",
			"강남",
			"가로수길",
			"합정",
		];
		if (!citys.includes(city))
			return res.send({
				isSuccess: false,
				code: 400, // 요청 실패시 400번대 코드
				message: "유효한 값이 아닙니다.",
			});
	}
	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			const [rows] = await indexDao.selectRestaurants(connection, city);

			return res.send({
				result: rows,
				isSuccess: true,
				code: 200, // 요청 실패시 400번대 코드
				message: "요청 성공",
			});
		} catch (err) {
			logger.error(`readRestaurants Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(
			`readRestaurants DB Connection error\n: ${JSON.stringify(err)}`
		);
		return false;
	}
};

// exports.deleteStudents = async function (req, res) {
// 	const { idx } = req.params;

// 	try {
// 		const connection = await pool.getConnection(async (conn) => conn);
// 		try {
// 			const isVaildIdx = await indexDao.isVaildIdx(connection, idx);

// 			if (!isVaildIdx) {
// 				return res.send({
// 					isSuccess: false,
// 					code: 410,
// 					message: "유효한 학생이 아닙니다.",
// 				});
// 			}
// 			const [rows] = await indexDao.deleteStudents(connection, idx);

// 			return res.send({
// 				isSuccess: true,
// 				code: 200, // 요청 실패시 400번대 코드
// 				message: "학생 삭제 성공",
// 			});
// 		} catch (err) {
// 			logger.error(`deleteStudent Query error\n: ${JSON.stringify(err)}`);
// 			return false;
// 		} finally {
// 			connection.release();
// 		}
// 	} catch (err) {
// 		logger.error(`deleteStudent DB Connection error\n: ${JSON.stringify(err)}`);
// 		return false;
// 	}
// };

// //student update

// exports.updateStudents = async function (req, res) {
// 	const { studentName, major, birth, address } = req.body;
// 	const { idx } = req.params;

// 	if (studentName && typeof studentName !== "string") {
// 		return res.send({
// 			isSuccess: false,
// 			code: 400,
// 			message: "이름을 정확히 입력해주세요.",
// 		});
// 	}
// 	if (major && typeof major !== "string") {
// 		return res.send({
// 			isSuccess: false,
// 			code: 400,
// 			message: "전공을 정확히 입력해주세요.",
// 		});
// 	}
// 	if (address && typeof address !== "string") {
// 		return res.send({
// 			isSuccess: false,
// 			code: 400,
// 			message: "직업을 정확히 입력해주세요.",
// 		});
// 	}
// 	if (birth) {
// 		var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
// 		if (regex.test(birth) == false) {
// 			return res.send({
// 				isSuccess: false,
// 				code: 400,
// 				message: "생일을 정확히 입력해주세요.",
// 			});
// 		}
// 	}

// 	try {
// 		const connection = await pool.getConnection(async (conn) => conn);
// 		try {
// 			const isVaildIdx = await indexDao.isVaildIdx(connection, idx);

// 			if (!isVaildIdx) {
// 				return res.send({
// 					isSuccess: false,
// 					code: 410,
// 					message: "유효한 학생이 아닙니다.",
// 				});
// 			}
// 			const [rows] = await indexDao.updateStudent(
// 				connection,
// 				idx,
// 				studentName,
// 				major,
// 				birth,
// 				address
// 			);

// 			return res.send({
// 				isSuccess: true,
// 				code: 200, // 요청 실패시 400번대 코드
// 				message: "학생 수정 성공",
// 			});
// 		} catch (err) {
// 			logger.error(`updateStudents Query error\n: ${JSON.stringify(err)}`);
// 			return false;
// 		} finally {
// 			connection.release();
// 		}
// 	} catch (err) {
// 		logger.error(
// 			`updateStudents DB Connection error\n: ${JSON.stringify(err)}`
// 		);
// 		return false;
// 	}
// };

// //student create
// exports.createStudents = async function (req, res) {
// 	const { studentName, major, birth, address } = req.body;

// 	if (
// 		typeof studentName !== "string" ||
// 		typeof major !== "string" ||
// 		typeof address !== "string"
// 	) {
// 		return res.send({
// 			isSuccess: false,
// 			code: 400,
// 			message: "값을 정확히 입력해주세요.",
// 		});
// 	}

// 	var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
// 	if (!regex.test(birth)) {
// 		return res.send({
// 			isSuccess: false,
// 			code: 400,
// 			message: "날짜 형식을 확인해주세요`\n` ex) xxxx-xx-xx.",
// 		});
// 	}

// 	try {
// 		const connection = await pool.getConnection(async (conn) => conn);
// 		try {
// 			const [rows] = await indexDao.insertStudents(
// 				connection,
// 				studentName,
// 				major,
// 				birth,
// 				address
// 			);

// 			return res.send({
// 				isSuccess: true,
// 				code: 200, // 요청 실패시 400번대 코드
// 				message: "학생 생성 성공",
// 			});
// 		} catch (err) {
// 			logger.error(`createStudents Query error\n: ${JSON.stringify(err)}`);
// 			return false;
// 		} finally {
// 			connection.release();
// 		}
// 	} catch (err) {
// 		logger.error(
// 			`createStudents DB Connection error\n: ${JSON.stringify(err)}`
// 		);
// 		return false;
// 	}
// };

const { pool } = require("../../config/database");
const { logger } = require("../../config/winston");
const jwt = require("jsonwebtoken");
const secret = require("../../config/secret");

const indexDao = require("../dao/indexDao");
const { add } = require("winston");

exports.deleteStudents = async function (req, res) {
	const { idx } = req.params;

	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			const isVaildIdx = await indexDao.isVaildIdx(connection, idx);

			if (!isVaildIdx) {
				return res.send({
					isSuccess: false,
					code: 410,
					message: "유효한 학생이 아닙니다.",
				});
			}
			const [rows] = await indexDao.deleteStudents(connection, idx);

			return res.send({
				isSuccess: true,
				code: 200, // 요청 실패시 400번대 코드
				message: "학생 삭제 성공",
			});
		} catch (err) {
			logger.error(`deleteStudent Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(`deleteStudent DB Connection error\n: ${JSON.stringify(err)}`);
		return false;
	}
};

//student update

exports.updateStudents = async function (req, res) {
	const { studentName, major, birth, address } = req.body;
	const { idx } = req.params;

	if (studentName && typeof studentName !== "string") {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "이름을 정확히 입력해주세요.",
		});
	}
	if (major && typeof major !== "string") {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "전공을 정확히 입력해주세요.",
		});
	}
	if (address && typeof address !== "string") {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "직업을 정확히 입력해주세요.",
		});
	}
	if (birth) {
		var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
		if (regex.test(birth) == false) {
			return res.send({
				isSuccess: false,
				code: 400,
				message: "생일을 정확히 입력해주세요.",
			});
		}
	}

	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			const isVaildIdx = await indexDao.isVaildIdx(connection, idx);

			if (!isVaildIdx) {
				return res.send({
					isSuccess: false,
					code: 410,
					message: "유효한 학생이 아닙니다.",
				});
			}
			const [rows] = await indexDao.updateStudent(
				connection,
				idx,
				studentName,
				major,
				birth,
				address
			);

			return res.send({
				isSuccess: true,
				code: 200, // 요청 실패시 400번대 코드
				message: "학생 수정 성공",
			});
		} catch (err) {
			logger.error(`updateStudents Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(
			`updateStudents DB Connection error\n: ${JSON.stringify(err)}`
		);
		return false;
	}
};

//student create
exports.createStudents = async function (req, res) {
	const { studentName, major, birth, address } = req.body;

	if (
		typeof studentName !== "string" ||
		typeof major !== "string" ||
		typeof address !== "string"
	) {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "값을 정확히 입력해주세요.",
		});
	}

	var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
	if (!regex.test(birth)) {
		return res.send({
			isSuccess: false,
			code: 400,
			message: "날짜 형식을 확인해주세요`\n` ex) xxxx-xx-xx.",
		});
	}

	try {
		const connection = await pool.getConnection(async (conn) => conn);
		try {
			const [rows] = await indexDao.insertStudents(
				connection,
				studentName,
				major,
				birth,
				address
			);

			return res.send({
				isSuccess: true,
				code: 200, // 요청 실패시 400번대 코드
				message: "학생 생성 성공",
			});
		} catch (err) {
			logger.error(`createStudents Query error\n: ${JSON.stringify(err)}`);
			return false;
		} finally {
			connection.release();
		}
	} catch (err) {
		logger.error(
			`createStudents DB Connection error\n: ${JSON.stringify(err)}`
		);
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

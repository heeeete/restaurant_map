module.exports = function (app) {
	const index = require("../controllers/indexController");
	const jwtMiddleware = require("../../config/jwtMiddleware");

	//식당 목록 조회
	app.get("/restaurants", index.readRestaurants);
	//회원가입
	app.post("/sign-up", index.createUsers);
	//로그인
	app.post("/sign-in", index.createJwt);
	//로그인 유지, 토큰 검증
	app.get("/jwt", jwtMiddleware, index.readJwt);
	//아이디 중복체크
	app.post("/userID", index.checkDuplicate);
	//식당 추가
	app.post("/add-restaurants", index.addRestaurants);
};

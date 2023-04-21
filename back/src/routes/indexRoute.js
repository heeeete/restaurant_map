module.exports = function (app) {
	const index = require("../controllers/indexController");
	const jwtMiddleware = require("../../config/jwtMiddleware");

	// 라우터 정의
	// app.HTTP메서드(uri, 컨트롤러 콜백함수)
	// app.get("/students", index.readStudents);

	// app.post("/students", index.createStudents);

	// app.patch("/students/:idx", index.updateStudents);

	// app.delete("/students/:idx", index.deleteStudents);
	app.get("/restaurants", index.readRestaurants);
};

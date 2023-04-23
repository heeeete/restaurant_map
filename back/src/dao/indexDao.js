const { add } = require("winston");
const { pool } = require("../../config/database");

exports.insertUsers = async function (connection, userID, password, nickname) {
	const Query = `insert into Users (nickname, userID, password) values (?, ?, ?);`;
	const Params = [nickname, userID, password];

	const rows = await connection.query(Query, Params);

	return rows;
};

exports.checkDuplicate = async function (connection, userID, nickname) {
	const IDQuery = `SELECT * FROM Users where userID = "${userID}";`;
	const nicknameQuery = `SELECT * FROM Users where nickname = "${nickname}";`;
	const params = [];

	const [IDrows] = await connection.query(IDQuery, params);
	if (IDrows.length >= 1) return 400;
	if (nickname) {
		const [nicknamerows] = await connection.query(nicknameQuery, params);
		if (nicknamerows.length >= 1) return 410;
	}
	return true;
};

exports.isVaildUsers = async function (connection, userID, password) {
	const Query = `SELECT userIdx, nickname FROM Users where userID = ? and password = ? and status = 'A';`;
	const params = [userID, password];
	const rows = await connection.query(Query, params);

	return rows;
};

exports.selectRestaurants = async function (connection, city) {
	const selectAllRestaurants = `SELECT title, city, address, url FROM Restaurants where status = 'A';`;
	const selectCityRestaurant = `SELECT title, city, address, url FROM Restaurants where city = ? and status = 'A'`;
	const Params = [city];

	let Query = city ? selectCityRestaurant : selectAllRestaurants;

	const rows = await connection.query(Query, Params);

	return rows;
};

// exports.deleteStudents = async function (connection, idx) {
// 	const Query = `update Students set status = "D" where studentIdx = ?;`;
// 	const params = [idx];

// 	const row = await connection.query(Query, params);
// 	return row;
// };

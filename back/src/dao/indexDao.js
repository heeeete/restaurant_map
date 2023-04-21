const { add } = require("winston");
const { pool } = require("../../config/database");

exports.insertUsers = async function (connection, userID, password, nickname) {
	const Query = `insert into Users (nickname, userID, password) values (?, ?, ?);`;
	const Params = [nickname, userID, password];

	const rows = await connection.Query(Query, Params);

	return rows;
};

exports.deleteStudents = async function (connection, idx) {
	const Query = `update Students set status = "D" where studentIdx = ?;`;
	const params = [idx];

	const row = await connection.query(Query, params);
	return row;
};

exports.isVaildIdx = async function (connection, name) {
	const Query = `SELECT * FROM Students where studentIdx = ? and status = 'A'`;
	const params = [name];
	const [rows] = await connection.query(Query, params);

	if (rows < 1) {
		return false;
	}
	return true;
};

exports.updateStudent = async function (
	connection,
	idx,
	studentName,
	major,
	birth,
	address
) {
	const Query = `update Students set studentName = ifnull(?, studentName), major = ifnull(?, major), birth = ifnull(?, birth), address = ifnull (?, address) where studentIdx = ?;`;
	const params = [studentName, major, birth, address, idx];

	const rows = await connection.query(Query, params);

	return rows;
};

exports.insertStudents = async function (
	connection,
	studentName,
	major,
	birth,
	address
) {
	const Query = `insert into Students(studentName, major, birth, address) value (?,?,?,?);`;
	const params = [studentName, major, birth, address];

	const rows = await connection.query(Query, params);

	return rows;
};

exports.insertStudents = async function (
	connection,
	studentName,
	major,
	birth,
	address
) {
	const Query = `insert into Students(studentName, major, birth, address) value (?,?,?,?);`;
	const params = [studentName, major, birth, address];

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

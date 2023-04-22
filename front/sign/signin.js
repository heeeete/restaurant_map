let url = "http://3.35.16.77:3000";

const btnLogin = document.querySelector("#signin");

btnLogin.addEventListener("click", signIn);

async function signIn(event) {
	const userID = document.querySelector("#userID").value;
	const password = document.querySelector("#password").value;

	if (!userID) return alert("아이디를 입력해주세요.");
	if (!password) return alert("비밀번호를 임력해주세요.");

	console.log("123");
	const signInReturn = await axios({
		method: "post",
		url: url + "/sign-in",
		headers: {},
		data: { userID: userID, password: password },
	});
	console.log("4556");

	const isValidSignIn = signInReturn.data.code == 200;
	console.log("1");
	if (!isValidSignIn) return alert("아이디 비밀번호를 확인해주세요.");
	console.log("2");

	const jwt = signInReturn.data.result.jwt;
	localStorage.setItem("x-access-token", jwt);
	alert(signInReturn.data.message);
	console.log("3");

	return location.replace("../restaurant_map/restaurant.html");
}

// let url = "http://3.35.16.77:3000";
let url = "http://127.0.0.1:3000";

const btnLogin = document.querySelector("#signin");

btnLogin.addEventListener("click", signIn);

async function signIn(event) {
	const userID = document.querySelector("#userID").value;
	const password = document.querySelector("#password").value;

	if (!userID) return alert("아이디를 입력해주세요.");
	if (!password) return alert("비밀번호를 임력해주세요.");

	const signInReturn = await axios({
		method: "post",
		url: url + "/sign-in",
		headers: {},
		data: { userID: userID, password: password },
	});

	const isValidSignIn = signInReturn.data.code == 200;
	if (!isValidSignIn) return alert("아이디 비밀번호를 확인해주세요.");

	const jwt = signInReturn.data.result.jwt;
	localStorage.setItem("x-access-token", jwt);
	alert(signInReturn.data.message);

	return location.replace("../restaurant_map/restaurant.html");
}

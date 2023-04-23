// const { isUint16Array } = require("util/types");

// let url = "http://3.35.16.77:3000";
let url = "http://127.0.0.1:3000";

const btnSubmit = document.querySelector("#Signup");
const btndupID = document.querySelector("#dupBtn");
const dupMsg = document.querySelector("#dupMsg");

btnSubmit.addEventListener("click", signup);
btndupID.addEventListener("click", checkDuplicate);

//userID 중복홧인
async function checkDuplicate(event) {
	const userID = document.querySelector("#userID").value;

	if (!userID) {
		dupMsg.innerHTML = "ID를 입력해주세요.";
		return;
	}
	const userIdReturn = await axios({
		method: "post", // http method
		url: url + "/userID",
		headers: {}, // packet header
		data: { userID: userID },
	});

	const isDup = userIdReturn.data.code == 200;

	if (isDup == true) {
		dupMsg.style.color = "blue";
		dupMsg.style.display = "block";
		dupMsg.innerHTML = "사용가능한 ID 입니다.";
		return;
	}
	dupMsg.style.color = "red";
	dupMsg.style.display = "block";
	dupMsg.innerHTML = "중복되는 아이디가 있습니다.";
	return;
}

// user 생성
async function signup(event) {
	const userID = document.querySelector("#userID").value;
	const password = document.querySelector("#password").value;
	const passwordConfirmInput = document.querySelector("#passwordConfirm").value;
	const nickname = document.querySelector("#nickname").value;

	const userIDRegExp = /^[a-z]+[a-z0-9]{5,19}$/;
	const passwordRegExp =
		/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
	const nicknameRegExp = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/;

	if (password !== passwordConfirmInput) {
		return alert("비밀번호가 일치하지 않습니다.");
	}
	if (!userIDRegExp.test(userID)) {
		return alert("아이디 형식: 영문자로 시작하는 영문자 또는 숫자 6-20");
	}
	if (!passwordRegExp.test(password)) {
		return alert("비밀번호 형식: 8-16 숫자 특수문자 영문자 조합");
	}
	if (!nicknameRegExp.test(nickname)) {
		return alert("닉네임 형식 2-10 한글, 숫자 또는 영문");
	}

	const signUpReturn = await axios({
		method: "post", // http method
		url: url + "/sign-up",
		headers: {}, // packet header
		data: { userID: userID, password: password, nickname: nickname },
	});

	const isValidSignUp = signUpReturn.data.code == 200;

	if (!isValidSignUp) return alert("요청에 문제가 생겼습니다.");

	const jwt = signUpReturn.data.result.jwt;
	localStorage.setItem("x-access-token", jwt);
	alert(signUpReturn.data.message);

	return location.replace("./signin.html");
}

// password 일치 확인

document.addEventListener("DOMContentLoaded", function () {
	const passwordInput = document.querySelector("#password");
	const passwordConfirmInput = document.querySelector("#passwordConfirm");
	const message = document.querySelector("#passwordMsg");

	passwordInput.addEventListener("input", checkPasswordsMatch);
	passwordConfirmInput.addEventListener("input", checkPasswordsMatch);

	function checkPasswordsMatch() {
		if (passwordInput.value !== "" && passwordConfirmInput.value !== "") {
			if (passwordInput.value === passwordConfirmInput.value) {
				message.textContent = "비밀번호가 일치합니다.";
				message.style.color = "green";
			} else {
				message.textContent = "비밀번호가 일치하지 않습니다.";
				message.style.color = "red";
			}
		} else {
			message.textContent = "";
		}
	}
});

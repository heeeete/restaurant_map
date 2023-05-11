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

	const signUpReturn = await axios({
		method: "post", // http method
		url: url + "/sign-up",
		headers: {}, // packet header
		data: { userID: userID, password: password, nickname: nickname },
	});

	const isValidSignUp = signUpReturn.data.code == 200;

	if (!isValidSignUp) return deleteBoard("error", signUpReturn.data.message);

	const jwt = signUpReturn.data.result.jwt;
	localStorage.setItem("x-access-token", jwt);
	Swal.fire({
		icon: "success",
		title: "회원가입 성공!",
	}).then(() => {
		return location.replace("./signin.html");
	});
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

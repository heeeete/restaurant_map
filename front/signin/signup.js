let url = "http://127.0.0.1:3000";

const btnSubmit = document.querySelector("#signup");

btnSubmit.addEventListener("click", signup);

async function signup(event) {
	const userID = document.querySelector("#userID").value;
	const password = document.querySelector("#password").value;
	const nickname = document.querySelector("#nickname").value;

	const userIDRegExp = /^[a-z]+[a-z0-9]{5,19}$/;
	const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/;
	const nicknameRegExp = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/;

	if (!userIDRegExp.test(userID)) {
		return alert("아이디 형식: 영문자로 시작하는 영문자 또는 숫자 6-20");
	}
	if (!passwordRegExp.test(password)) {
		return alert("비밀번호 형식: 8-16 문자, 숫자 조합");
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

let url = "http://3.35.16.77:3000";

const jwt = localStorage.getItem("x-access-token");
setHeader(jwt);

const btnSignOut = document.querySelector("#sign-out");
btnSignOut.addEventListener("click", signOut);

async function setHeader(jwt) {
	if (!jwt) {
		return false;
	}

	const jwtReturn = await axios({
		method: "get", // http method
		url: url + "/jwt",
		headers: { "x-access-token": jwt }, // packet header
		data: {}, // packet body
	});

	console.log(jwtReturn);
	const isValidJwt = jwtReturn.data.code == 200;

	if (!isValidJwt) {
		signOut();
		return false;
	}
	const nickname = jwtReturn.data.result.nickname;
	const spanNickname = document.querySelector(".nickname");

	spanNickname.innerHTML = `${nickname}`;

	return true;
}

function signOut(event) {
	localStorage.removeItem("x-access-token"); // 토큰 삭제하고
	location.replace("../index.html"); // 새로고침
}

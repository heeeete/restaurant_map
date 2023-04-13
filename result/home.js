// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
	// `.toFixed()`를 통해 반환된 문자 데이터를,
	// `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
	// gsap.to(요소, 시간, 옵션)
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1, // -1 무한반복
		yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끈킴)
		ease: Power1.easeInOut, // 타이밍함수
		delay: random(0, delay), // 지연시간
	});
}
floatingObject(".img_1", 1, 15);
floatingObject(".img_2", 0.5, 15);
floatingObject(".img_3", 1.5, 20);
floatingObject(".img_4", 1.5, 20);

//이미지 변경
// const images = [
// 	"./home_img/chicken.png",
// 	"./home_img/steak.png",
// 	"./home_img/cafe.png",
// 	"./home_img/salmon.png",
// 	"./home_img/Hamburger.png",
// 	"./home_img/pizza.png",
// 	"./home_img/noodle.png",
// 	"./home_img/noodle2.png",
// 	"./home_img/porkcutlet.png",
// ];

// function shuffleArray(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// }

// function changeImages() {
// 	shuffleArray(images);

// 	document.querySelector(".img_1").src = images[0];
// 	document.querySelector(".img_2").src = images[1];
// 	document.querySelector(".img_3").src = images[2];
// 	document.querySelector(".img_4").src = images[3];
// }

// setInterval(changeImages, 2000);

const images = [
	"./home_img/chicken.png",
	"./home_img/steak.png",
	"./home_img/cafe.png",
	"./home_img/salmon.png",
	"./home_img/Hamburger.png",
	"./home_img/pizza.png",
	"./home_img/noodle.png",
	"./home_img/noodle2.png",
	"./home_img/porkcutlet.png",
];

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function changeImage(selector, newSrc) {
	const imageElement = document.querySelector(selector);
	imageElement.style.opacity = 0;

	setTimeout(() => {
		imageElement.src = newSrc;
		imageElement.style.opacity = 1;
	}, 1000);
}

function changeImages() {
	shuffleArray(images);

	changeImage(".img_1", images[0]);
	changeImage(".img_2", images[1]);
	changeImage(".img_3", images[2]);
	changeImage(".img_4", images[3]);
}

setInterval(changeImages, 4000);

gsap.from(".main-text", { opacity: 0, duration: 5 });

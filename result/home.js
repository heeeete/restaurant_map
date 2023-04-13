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
floatingObject(".cafeImg", 1, 15);
floatingObject(".chickenImg", 0.5, 15);
floatingObject(".salmonImg", 1.5, 20);
floatingObject(".steakImg", 1.5, 20);

const images = [
	"./home_img/chicken.png",
	"./home_img/steak.png",
	"./home_img/cafe.png",
	"./home_img/salmon.png",
];

const imageSelectors = [".chickenImg", ".steakImg", ".cafeImg", ".salmonImg"];

// function getRandomIndex(array) {
// 	return Math.floor(Math.random() * array.length);
// }

let lastImageIndex;

function getRandomIndex(array) {
	let index;
	do {
		index = Math.floor(Math.random() * array.length);
	} while (index === lastImageIndex);
	lastImageIndex = index;
	return index;
}

function changeImage() {
	const randomImageIndex = getRandomIndex(images);
	const randomImage = images[randomImageIndex];

	const randomSelectorIndex = getRandomIndex(imageSelectors);
	const randomSelector = imageSelectors[randomSelectorIndex];

	document.querySelector(randomSelector).src = randomImage;
}

setInterval(changeImage, 1000);

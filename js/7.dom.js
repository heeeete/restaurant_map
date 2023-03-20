// 엘리먼트 선택 예제
// querySelector = NodeList
// console.log(document.querySelector("div.welcome"));
// console.log(document.querySelectorAll("div"));
// getElements = HTMLCollection
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementById("hi"));
// console.log(document.getElementsByClassName("welcome"));

/*--------------------------------------------*/
// const divTag = document.querySelector("div");

// divTag.innerHTML += `안녕하세요`;
// divTag.style.fontSize = `30px`;
/*--------------------------------------------*/

/*--------------------------------------------*/
// innerSecond 에 item2 찾기
// const container = document.querySelector(".container");
// console.log(container.children[1].children[1]);
/*--------------------------------------------*/

const productsData = [
	{ title: "감자칩", weight: 300 },
	{ title: "칙촉", weight: 100 },
	{ title: "고구마칩", weight: 300 },
	{ title: "오잉", weight: 50 },
];
const app = document.querySelector(`#app`);

let result = "";

for (let data of productsData) {
	result += `<div class="item">상품명 : ${data.title}, 무게 : ${data.weight}g</div>`;
}

app.innerHTML = result;

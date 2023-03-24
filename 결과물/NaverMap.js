const dataSet = [
	{
		title: `육갑식당`,
		address: `서울 서초구 방배중앙로 166`,
		url: "https://map.naver.com/v5/entry/place/31143865?lng=126.9864000104&lat=37.49387176846349&placePath=%2Fhome&c=15,0,0,0,dh",
		category: "이수",
	},
	{
		title: "박재성의 메밀숯불닭갈비",
		address: "서울 관악구 신원로 40-16 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1183723316?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		category: "신림",
	},
	{
		title: `깡통닭갈비`,
		address: `서울 관악구 남부순환로 1597-14 1층`,
		url: "https://map.naver.com/v5/search/%EA%B9%A1%ED%86%B5%EB%8B%AD%EA%B0%88%EB%B9%84/place/37098349?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		category: "신림",
	},
	{
		title: "뉴오더클럽 연납",
		address: "서울 마포구 동교로34길 3",
		url: "https://map.naver.com/v5/search/%EB%89%B4%EC%98%A4%EB%8D%94%ED%81%B4%EB%9F%BD%20%EC%97%B0%EB%82%A8/place/1173480601?c=15,0,0,0,dh&isCorrectAnswer=true",
		category: "연남",
	},
	{
		title: "치킨마루 마포연남점",
		address: "서울 마포구 동교로27길 62",
		url: "https://map.naver.com/v5/search/%EC%B9%98%ED%82%A8%EB%A7%88%EB%A3%A8%20%ED%99%8D%EB%8C%80/place/35873480?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		category: "연남",
	},
	{
		title: "록갈비 신림본점",
		address: "서울 관악구 봉천로6길 18 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A1%9D%EA%B0%88%EB%B9%84/place/1606728293?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		category: "신림",
	},
	{
		title: "고기싸롱 신림역점",
		address: "서울 관악구 남부순환로 1600 2층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EA%B3%A0%EA%B8%B0%EC%8B%B8%EB%A1%B1/place/1263794234?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		category: "신림",
	},
	// {
	// 	title: "",
	// 	address: "",
	// 	url: "",
	// 	category: "",
	// },
];

let infoWindows = new Array();
let markers = new Array();

var container = document.getElementById("map");
var mapOptions = {
	center: new naver.maps.LatLng(37.484269, 126.929676),
	zoom: 14,
};
var map = new naver.maps.Map(container, mapOptions);

// 좌표 찍는 함수
// async function makeMarker() {
// 	for (var i = 0; i < dataSet.length; i++) {
// 		let coords = await getCoordsByAddress(dataSet[i].address);
// 		var marker = new naver.maps.Marker({
// 			position: coords,
// 			title: dataSet[i].title,
// 			map: map,
// 		});

// 		var infowindow = new naver.maps.InfoWindow({
// 			content: `<div>${dataSet[i].title}asdasd</div>`,
// 		});

// 		markers.push(marker);
// 		infoWindows.push(infowindow);
// 	}
// }

// modified makeMarker() function to return a Promise
// async function makeMarker() {
// 	const promises = [];
// 	for (var i = 0; i < dataSet.length; i++) {
// 		let coords = await getCoordsByAddress(dataSet[i].address);
// 		var marker = new naver.maps.Marker({
// 			position: coords,
// 			title: dataSet[i].title,
// 			map: map,
// 		});

// 		var infowindow = new naver.maps.InfoWindow({
// 			content: `<div>${dataSet[i].title}asdasd</div>`,
// 		});

// 		markers.push(marker);
// 		infoWindows.push(infowindow);

// 		promises.push(
// 			new Promise((resolve) => {
// 				// resolve the promise after the marker is added to the map
// 				naver.maps.Event.addListener(marker, "position_changed", () => {
// 					resolve();
// 				});
// 			})
// 		);
// 	}
// 	// wait for all promises to be resolved (i.e., all markers are added)
// 	return Promise.all(promises);
// }

async function makeMarker() {
	const promises = [];
	for (var i = 0; i < dataSet.length; i++) {
		let coords = await getCoordsByAddress(dataSet[i].address);
		var marker = new naver.maps.Marker({
			position: coords,
			title: dataSet[i].title,
			map: map,
		});

		var infowindow = new naver.maps.InfoWindow({
			content: `<div>${dataSet[i].title}</div>`,
		});

		markers.push(marker);
		infoWindows.push(infowindow);
	}
}

function getCoordsByAddress(address) {
	return new Promise((resolve, reject) => {
		naver.maps.Service.geocode(
			{ address: address },
			function (status, response) {
				if (status === naver.maps.Service.Status.ERROR) {
					return reject(new Error("getCoordsByAddress: Not vaild Address"));
				}
				var coords = new naver.maps.LatLng(
					response.v2.addresses[0].y,
					response.v2.addresses[0].x
				);
				return resolve(coords);
			}
		);
	});
}

function getClickHandler(seq) {
	return function (e) {
		// 마커를 클릭하는 부분
		var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
			infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다

		if (infoWindow.getMap()) {
			infoWindow.close();
		} else {
			infoWindow.open(map, marker); // 표출
		}
	};
}
// call makeMarker() function to add markers to the map
makeMarker().then(() => {
	// this will only be called after all the markers have been added
	// console.log(markers.length);
	for (var i = 0, ii = markers.length; i < ii; i++) {
		// console.log(markers[i], getClickHandler(i));
		naver.maps.Event.addListener(markers[i], "click", getClickHandler(i)); // 클릭한 마커 핸들러
	}
});

// event 함수
// function makeOverListener(map, marker, infowindow) {
// 	return function () {
// 		infowindow.open(map, marker);
// 	};
// }
// function makeOutListener(infowindow) {
// 	return function () {
// 		infowindow.close();
// 	};
// }
// 주소-좌표 변환 함수

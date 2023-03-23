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
	// {
	// 	title: "",
	// 	address: "아",
	// 	url: "",
	// 	category: "",
	// },
	// {
	// 	title: "",
	// 	address: "",
	// 	url: "",
	// 	category: "",
	// },
	// {
	// 	title: "",
	// 	address: "",
	// 	url: "",
	// 	category: "",
	// },
	// {
	// 	title: "",
	// 	address: "",
	// 	url: "",
	// 	category: "",
	// },
	// {
	// 	title: "",
	// 	address: "",
	// 	url: "",
	// 	category: "",
	// },
];

var container = document.getElementById("map");
var mapOptions = {
	center: new naver.maps.LatLng(37.484269, 126.929676),
	zoom: 14,
};
var map = new naver.maps.Map(container, mapOptions);

// 좌표 찍는 함수
async function makeMarker() {
	for (var i = 0; i < dataSet.length; i++) {
		let coords = await getCoordsByAddress(dataSet[i].address);
		var marker = new naver.maps.Marker({
			position: coords,
			map: map,
		});

		var infowindow = new naver.maps.InfoWindow({
			content: `<div>hello</div>`,
		});
		// naver.maps.Event.addListener(marker, "click", function (e) {
		// 	if (infowindow.getMap()) {
		// 		infowindow.close();
		// 	} else {
		// 		infowindow.open(map, marker);
		// 	}
		// });
		naver.maps.Event.addListener(
			marker,
			"mouseover",
			makeOverListener(map, marker, infowindow)
		);
		naver.maps.Event.addListener(
			marker,
			"mouseout",
			makeOutListener(infowindow)
		);
	}
}

// event 함수
function makeOverListener(map, marker, infowindow) {
	return function () {
		infowindow.open(map, marker);
	};
}
function makeOutListener(infowindow) {
	return function () {
		infowindow.close();
	};
}
// 주소-좌표 변환 함수
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

makeMarker();

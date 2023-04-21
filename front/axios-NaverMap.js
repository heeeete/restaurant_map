async function getDataSet(city) {
	let qs = city;
	if (!qs) {
		qs = "";
	}

	const dataSet = await axios({
		method: "get",
		url: `http://localhost:3000/restaurants?city=${qs}`,
		headers: {},
		data: {},
	});
	return dataSet.data.result;
}

let infoWindows = new Array();
let markers = new Array();

var container = document.getElementById("map");
var mapOptions = {
	center: new naver.maps.LatLng(37.484269, 126.929676),
	zoom: 14,
};
var map = new naver.maps.Map(container, mapOptions);

async function makeMarker(dataSet) {
	const promises = [];
	for (var i = 0; i < dataSet.length; i++) {
		let coords = await getCoordsByAddress(dataSet[i].address);
		var marker = new naver.maps.Marker({
			position: coords,
			title: dataSet[i].title,
			map: map,
		});

		var infowindow = new naver.maps.InfoWindow({
			borderWidth: 0,
			content: makeInfowindow(dataSet[i]),
		});

		markers.push(marker);
		infoWindows.push(infowindow);
	}
}

function getCoordsByAddress(address) {
	return new Promise((resolve, reject) => {
		naver.maps.Service.geocode({ address: address }, function (status, result) {
			if (status === naver.maps.Service.Status.OK) {
				var coords = new naver.maps.LatLng(
					result.v2.addresses[0].y,
					result.v2.addresses[0].x
				);
				return resolve(coords);
			}
			reject(new Error("getCoordsByAddress: not vaild address"));
		});
	});
}

function makeInfowindow(data) {
	return `
	<div class="infowindow">
				<div class="infowindow-img-container">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2079/2079154.png"
						class="infowindow-img"
					/>
				</div>
				<div class="infowindow-text-container">
					<h5 class="infowindow-title">${data.title}</h5>
					<a href="${data.url} class="infowindow-btn" style="text-decoration: none;" target="_blank"" >MAP</href>
				</div>
	</div>
	`;
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

function cityhandler() {
	document.getElementById("silim").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.483247, 126.92993));
	});
	document.getElementById("hongdae").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.557527, 126.9244669));
	});
	document.getElementById("gangnam").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.4975114, 127.0267694));
	});
	document.getElementById("yeonnam").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.5627439, 126.9214088));
	});
	document.getElementById("jamsil").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.5132612, 127.1001336));
	});
	document.getElementById("hapjeong").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.549626, 126.914032));
	});
	document.getElementById("garosu").addEventListener("click", function () {
		map.setCenter(new naver.maps.LatLng(37.5208062, 127.0227158));
	});
	document
		.getElementById("seoulUniversity")
		.addEventListener("click", function () {
			map.setCenter(new naver.maps.LatLng(37.48121, 126.952712));
		});
}

function setMarker(dataSet) {
	makeMarker(dataSet).then(() => {
		for (var i = 0, ii = markers.length; i < ii; i++) {
			naver.maps.Event.addListener(markers[i], "click", getClickHandler(i)); // 클릭한 마커 핸들러
		}

		naver.maps.Event.addListener(map, "click", function () {
			for (var i = 0, ii = infoWindows.length; i < ii; i++) {
				infoWindows[i].close(); // 지도상 아무곳을 클릭하면 infoWindow 닫기
			}
		});
	});
}

async function setting() {
	try {
		const dataSet = await getDataSet();
		setMarker(dataSet);
	} catch (error) {
		console.error(error);
	}
}
setting();
cityhandler();

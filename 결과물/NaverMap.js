const dataSet = [
	{
		title: `육갑식당`,
		address: `서울 서초구 방배중앙로 166`,
		url: "https://map.naver.com/v5/entry/place/31143865?lng=126.9864000104&lat=37.49387176846349&placePath=%2Fhome&c=15,0,0,0,dh",
		city: "이수",
	},
	{
		title: "박재성의 메밀숯불닭갈비",
		address: "서울 관악구 신원로 40-16 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1183723316?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "신림",
	},
	{
		title: `깡통닭갈비`,
		address: `서울 관악구 남부순환로 1597-14 1층`,
		url: "https://map.naver.com/v5/search/%EA%B9%A1%ED%86%B5%EB%8B%AD%EA%B0%88%EB%B9%84/place/37098349?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "신림",
	},
	{
		title: "뉴오더클럽 연납",
		address: "서울 마포구 동교로34길 3",
		url: "https://map.naver.com/v5/search/%EB%89%B4%EC%98%A4%EB%8D%94%ED%81%B4%EB%9F%BD%20%EC%97%B0%EB%82%A8/place/1173480601?c=15,0,0,0,dh&isCorrectAnswer=true",
		city: "연남",
	},
	{
		title: "치킨마루 마포연남점",
		address: "서울 마포구 동교로27길 62",
		url: "https://map.naver.com/v5/search/%EC%B9%98%ED%82%A8%EB%A7%88%EB%A3%A8%20%ED%99%8D%EB%8C%80/place/35873480?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "연남",
	},
	{
		title: "록갈비 신림본점",
		address: "서울 관악구 봉천로6길 18 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A1%9D%EA%B0%88%EB%B9%84/place/1606728293?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "신림",
	},
	{
		title: "고기싸롱 신림역점",
		address: "서울 관악구 남부순환로 1600 2층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EA%B3%A0%EA%B8%B0%EC%8B%B8%EB%A1%B1/place/1263794234?c=12,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "신림",
	},
	{
		title: "시골장칼국수",
		address: "서울 관악구 신림로66길 20",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%EC%9E%A5%EC%B9%BC%EA%B5%AD%EC%88%98/place/37203123?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh",
		city: "신림",
	},
	{
		title: "춘천골 숯불 닭갈비",
		address: "서울 관악구 신림동7길 46 우명빌딩",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/35977927?c=14.86,0,0,0,dh&placePath=%3Fentry=pll",
		city: "신림",
	},
	{
		title: "중화요리 팔공",
		address: "서울 관악구 남부순환로 1680",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1775787333?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "만성찬팅",
		address: "서울 관악구 신림로 322-4 외 1필지 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/37537647?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "본화로",
		address: "서울 관악구 남부순환로 1592-5",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/37351290?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "서울뼛국",
		address: "서울 관악구 관천로 36-1",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1054613378?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "신림춘천집 본점",
		address: "서울 관악구 남부순환로 1600-8",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/37700379?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "고베규카츠 신림점",
		address: "서울 관악구 남부순환로176길 8",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/38310369?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "텐동 신텐",
		address: "서울 관악구 봉천로6길 36 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1046483720?c=14.86,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "달다어요",
		address: "서울 관악구 신림로68길 38 1층 달다어요",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1661297266?c=15.66,0,0,0,dh&placePath=%3Fentry=pll",
		city: "신림",
	},
	{
		title: "카츠오도",
		address: "서울 관악구 조원로16가길 51",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1990940670?c=15.66,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "맛사랑쭈꾸미 신림본점",
		address: "서울 관악구 신림로 309",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1991391232?c=15.66,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "초밥아저씨",
		address: "서울 관악구 신원로 23 신원시장",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/19754004?c=15.56,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "긴자료코 신림점",
		address: "서울 관악구 남부순환로 1630 1층",
		url: "https://map.naver.com/v5/search/%EC%8B%A0%EB%A6%BC%20%EB%A7%9B%EC%A7%91/place/1036119438?c=17.59,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "신림",
	},
	{
		title: "수상한베이글",
		address: "서울 마포구 와우산로15길 22",
		url: "https://map.naver.com/v5/search/%EC%88%98%EC%83%81%ED%95%9C%EB%B2%A0%EC%9D%B4%EA%B8%80/place/1447452112?c=15.33,0,0,0,dh&isCorrectAnswer=true",
		city: "홍대",
	},
	{
		title: "델리인디아",
		address: "서울 마포구 독막로9길 8 2층",
		url: "https://map.naver.com/v5/search/%ED%99%8D%EB%8C%80%20%EB%A7%9B%EC%A7%91/place/37420517?c=15,0,0,0,dh&placePath=%3Fentry%253Dpll",
		city: "홍대",
	},
	{
		title: "주벤쿠바 샤로수길점",
		address: "서울 관악구 관악로14나길 10 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1136183514?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "사담",
		address: "서울 관악구 남부순환로 1852 5층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1206529518?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "모힝",
		address: "서울 관악구 봉천로62길 7",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/36084392?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "쭈앤쭈",
		address: "서울 관악구 관악로14길 11 1층, 쭈앤쭈",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1999378240?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "텐동요츠야",
		address: "서울 관악구 관악로14길 35 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/38460514?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "온돌 서울대입구정",
		address: "서울 관악구 봉천로 534",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/514296312?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "빠레뜨한남 샤로수길점",
		address: "서울 관악구 남부순환로230길 40 1층 빠레뜨한남",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1645597011?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "씨크스페셜티커피",
		address: "서울 관악구 관악로12길 45-12 1층 씨크스페셜티커피",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1480987363?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "다이히로",
		address: "서울 관악구 행운1길 3 1층 다이히로",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1954265803?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "문득",
		address: "서울 관악구 관악로14길 8",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1926971458?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "베이컨시",
		address: "서울 관악구 봉천로62길 5 B1",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1334871226?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "쑥고개",
		address: "서울 관악구 관악로14길 16 지하1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1686430922?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "멘쇼우라멘",
		address: "서울 관악구 남부순환로230길 25",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1075414895?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "고기굽는사람들",
		address: "서울 관악구 관악로14길 70 효림빌딩 106호",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/94550787?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "정숙성",
		address: "서울 관악구 남부순환로226길 31 1층 정숙성",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1959742624?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "라우더커피바",
		address: "서울 관악구 봉천로 535 102호",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1019362346?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "낙원의소바",
		address: "서울 관악구 관악로 164 1층 103호 (대우디오슈페리움1단지)",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1709664208?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "옷살 서울대입구본점",
		address: "서울 관악구 관악로 164 대우디오슈페리움1단지 지하1층 104, 105호",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/19878517?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "삼백돈 돈카츠 본점",
		address: "서울 관악구 남부순환로230길 48",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/648063703?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "꼬르동",
		address: "서울 관악구 관악로14길 89 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1487159516?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "누아젯",
		address: "서울 관악구 행운1길 4 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1015982606?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "모다모다",
		address: "서울 관악구 관악로14길 36 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/38447188?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "모즈타파스라운지",
		address: "서울 관악구 남부순환로226길 36 지하 모즈타파스라운지",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/37349706?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "온달집",
		address: "서울 관악구 관악로16길 38 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1930827839?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
	{
		title: "빽돈 본점",
		address: "서울 관악구 관악로16길 32-2 1층",
		url: "https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EB%8C%80%EC%9E%85%EA%B5%AC%EC%97%AD%20%EB%A7%9B%EC%A7%91/place/1750208902?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
		city: "서울대입구",
	},
];
let infoWindows = new Array();
let markers = new Array();

var container = document.getElementById("map");
var mapOptions = {
	center: new naver.maps.LatLng(37.484269, 126.929676),
	zoom: 14,
};
var map = new naver.maps.Map(container, mapOptions);

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

makeMarker().then(() => {
	for (var i = 0, ii = markers.length; i < ii; i++) {
		naver.maps.Event.addListener(markers[i], "click", getClickHandler(i)); // 클릭한 마커 핸들러
	}

	naver.maps.Event.addListener(map, "click", function () {
		for (var i = 0, ii = infoWindows.length; i < ii; i++) {
			infoWindows[i].close(); // 지도상 아무곳을 클릭하면 infoWindow 닫기
		}
	});
	var menu = new naver.maps.MapTypeControl({
		style: naver.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		position: naver.maps.Position.TOP_RIGHT,
		mapTypes: [
			naver.maps.MapTypeId.NORMAL,
			naver.maps.MapTypeId.SATELLITE,
			naver.maps.MapTypeId.HYBRID,
		],
	});

	map.controls[naver.maps.Position.TOP_RIGHT].push(menu.getElement());
});

cityhandler();

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

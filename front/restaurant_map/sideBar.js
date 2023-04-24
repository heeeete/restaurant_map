const Add = document.querySelector("#add");

Add.addEventListener("click", addevent);

async function getRestaurantName() {
	const { value: getName } = await Swal.fire({
		title: "식당을 입력하세요.",
		input: "text",
		inputPlaceholder: "입력...",
	});
	return getName;
}

async function confirmRestaurantName(getName) {
	const result = await Swal.fire({
		title: `${getName} 이 맞습니까?`,
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "승인",
		cancelButtonText: "취소",
	});
	return result.isConfirmed;
}

async function getRegion() {
	const result = await Swal.fire({
		title: "지역을 선택하세요.",
		html: `<div class=a>
						<input type="radio" name="region" id="region1" value="신림">
						<label for="region1">신림</label>
						<input type="radio" name="region" id="region2" value="홍대">
						<label for="region2">홍대</label>
						<input type="radio" name="region" id="region3" value="강남">
						<label for="region3">강남</label>
						<input type="radio" name="region" id="region4" value="연남">
						<label for="region4">연남</label>
					</div>
					<div class=b>
						<input type="radio" name="region" id="region5" value="잠실">
						<label for="region5">잠실</label>
						<input type="radio" name="region" id="region6" value="합정">
						<label for="region6">합정</label>
						<input type="radio" name="region" id="region7" value="가로수길">
						<label for="region7">가로수길</label>
						<input type="radio" name="region" id="region8" value="서울대입구">
						<label for="region8">서울대입구</label>
					</div>`,
		focusConfirm: false,
		preConfirm: async () => {
			const selectedValue = document.querySelector(
				'input[name="region"]:checked'
			);
			if (!selectedValue) {
				Swal.showValidationMessage("지역을 선택하세요!");
			}
			return selectedValue ? selectedValue.value : null;
		},
	});
	return result.value;
}

async function getUrl() {
	const { value: url } = await Swal.fire({
		title: "url을 입력해주세요",
		input: "text",
		inputPlaceholder: "입력...",
	});
	return url;
}

async function getAddress() {
	const { value: address } = await Swal.fire({
		title: "주소을 입력해주세요",
		input: "text",
		inputPlaceholder: "입력...",
	});
	return address;
}

async function getInfo() {
	const restaurant = {};

	const name = await getRestaurantName();
	if (!name) return;

	const isConfirmed = await confirmRestaurantName(name);
	if (!isConfirmed) {
		getInfo();
		return;
	}

	restaurant.name = name;
	restaurant.city = await getRegion();
	if (!restaurant.city) return;

	restaurant.url = await getUrl();
	if (!restaurant.url) return;

	restaurant.address = await getAddress();
	return restaurant;
}

async function addevent(event) {
	const restaurant = await getInfo();

	const axiosReturn = await axios({
		method: "post", // http method
		url: url + "/add-restaurants",
		headers: {}, // packet header
		data: {
			title: restaurant.name,
			address: restaurant.address,
			url: restaurant.url,
			city: restaurant.city,
		},
	});
	return;
}

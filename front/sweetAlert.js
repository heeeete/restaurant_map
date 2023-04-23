function deleteBoard(icon, title) {
	Swal.fire({
		icon: icon,
		title: title,
	});
}

window.deleteBoard = deleteBoard; // 이 줄을 추가하세요

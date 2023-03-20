const showBtn = document.getElementById(`btn`);

showBtn.addEventListener("click", ev);

function ev(event) {
	console.log(event.target);
	document.getElementById(`text`).innerHTML = `까꿍`;
}

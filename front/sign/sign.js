document.addEventListener("DOMContentLoaded", function () {
	const inputs = document.querySelectorAll(
		".sign-form input:not([type='button'])"
	);
	const labels = document.querySelectorAll(".float-label");

	inputs.forEach((input, index) => {
		input.addEventListener("focus", () => {
			labels[index].classList.add("active");
		});

		input.addEventListener("blur", () => {
			if (input.value.trim() === "") {
				labels[index].classList.remove("active");
			}
		});
	});
});

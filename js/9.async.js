function second() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`20`);
			resolve();
		}, 2000);
	});
}

function third() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`30`);
			resolve();
		}, 2000);
	});
}

async function asyncFunctions() {
	console.log(`1`);
	await second();
	await third();
}

asyncFunctions();
console.log(`00`);

let i = 1;

while (i <= 10) {
	console.log(`안녕`);
	i++;
}

i = 1;

// Quiz

while (i <= 50) {
	if (i % 5 === 0) console.log(i);
	i++;
}

i = 1;

const arr = [10, 20, 30, 40, 50];

// in = arr의 인덱스가 순서대로 들어감
for (let index in arr) {
	console.log(arr[index]);
}

// of = arr의 값이 순수대로 item에 들어감
for (let item of arr) {
	console.log(item);
}

const list = { huipakr: "박희태", hyunjki2: `김현지`, jimpark: `박지민` };

for (let key in list) {
	console.log(key);
}

for (let value in list) {
	console.log(list[value]);
}

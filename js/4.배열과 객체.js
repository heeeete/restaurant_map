// 배열 Create
const arr = [1, 2, 3, 4];

// 배열 Read
console.log(arr[3]);

console.log(arr.slice(1, 3)); //1번째 index 부터 2번째 index 까지

// 배열 update

arr[0] = 100;

console.log(arr[0]);

// 배열 delete

arr.splice(0, 1);

console.log(arr);

// Quiz
const nameList = ["짱구", "철수"];
nameList.push("훈이");
console.log(nameList);
nameList[1] = "유리";
console.log(nameList);
nameList.splice(0, 1);
console.log(nameList);

// 객체 Creat

let user_info = {
	email: "mkoui@naver.com",
	password: "qqq123",
};

// 객체 Read

console.log(user_info.email);
console.log(user_info.password);

// 객체 update

user_info.email = "MKOUI@naver.com";
console.log(user_info.email);

// 객체 Delete

delete user_info.email;
console.log(user_info);

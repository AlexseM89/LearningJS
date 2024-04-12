// const initSnake = (str) => {
//     let tempStr = "";
//     for (let i of str) {
//         tempStr =
//             i === i.toUpperCase()
//                 ? tempStr + "_" + i.toLowerCase()
//                 : tempStr + i;
//     }
//     return tempStr;
// };
// console.log(initSnake("camelCaseStr"));

// const zeros = (num, len, sign = "+") => {
//     if (String(num).length > len) return sign + num;
//     return sign + num + "0".repeat(len - String(num).length);
// };
// console.log(zeros(111, 3, "-"));
// массивы и объекты
// const arr = ["apple", 1, true, null];
// console.log(arr[0]);

// for (let el of arr) {
//     console.log(el);
// }
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(typeof []);
// console.log(Array.isArray(arr));
// console.log(...arr);

// let arr = ["apple", 55];
// console.log(arr[3]);
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// arr.test = "value";
// console.log(typeof arr);
// console.log(arr.test);
// console.log(typeof arr);
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[4]);

//Приведение массива к строке
// let arr = [1, 4, 5];
// console.log(typeof String(arr));
// let arr1 = [];
// let arr2 = [];
// console.log(String(arr1) === String(arr2));

// const arr = ["apple", "lemon", "banana", "tomato"];

// console.log(arr.forEach((el) => console.log("Frut " + el)));
// const newarr = arr.map((el, i) => `Frut number ${i} ` + el);
// const newarr2 = arr.map(
//     (el, i, arr) => `Frut number ${i} ` + el + ` all fructs ` + String(arr)
// );
// console.log(newarr);
// console.log(newarr2);
// console.log(arr);

// const arr = [1, 2, 3, 4];
// const fillterArr = arr.filter((e) => e % 2 === 0);
// const fillterArr2 = arr.filter((e, i) => e + i < 4);
// let result = arr.reduce((accum, current) => {
//     console.log("accum", accum);
//     console.log("current", current);
//     return accum + current;
// }, 10);
// console.log(arr);
// console.log(fillterArr);
// console.log(fillterArr2);

// let arr = [1, 2, 3, 4, 6, -3];
// function test(arr) {
//     const filteredArray = arr.filter((el) => el > 0 && !(el % 2));
//     const result = filteredArray.reduce((acc, val) => acc + val, 0);
//     console.log(filteredArray);
//     return result;
// }
// test(arr);
// console.log(test(arr));
// const test = (arr)=> arr.filter
// let arr = [1, 2, 2, 4, 6];
// function test(arr) {
//     let res = [];
//     for (let i of arr) {
//         if (!res.includes(i)) {
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(test(arr));

// const arr = [1, 2, 3, 2, 2];
// console.log([...new Set(arr)]);

// const obj1 = { a: 1, b: 2 };
// const copyobj = {};

// const itog = Object.assign(, obj1);
// const copeobj2 = { ... obj };
// console.log(itog);
// console.log(obj1 === copyobj);
let arr = [10, 20, 30, 45];

for (let value of arr) {
    value += value;
    console.log(value);
}

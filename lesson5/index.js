//Объекты, примитивы
// let user = {
//     sayName: function () {
//         console.log(this.name);
//     },
// };
// user.name = "Alexsei";
// user["age"] = 34;
// console.log(user);
// user.sayName();
// const pol = "sex";
// user[pol] = "male";
// console.log(user);
// методы

// let user = {
//     sayName: function () {
//         console.log("name");
//     },
// };
// user.sayName();

// let myFavoriteFilm = {
//     moviTittle: "Titanic",
//     since: 1997,
//     nameRegiser: "Cameron",
//     country: "USA",
// };
// myFavoriteFilm.cash = "2,2 billions $";

// myFavoriteFilm.moviFilms = function () {
//     console.log(this.moviFilms);
// };

// delete myFavoriteFilm.since;
// console.log(myFavoriteFilm);

//Примитивы как объект
// let str = "Hello Alexsei";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.length);

// let number = 1.2232;
// console.log(number.toFixed(2));
// console.log(4.1e3);

// const number = 100 / 0;

// console.log(Number.isFinite(number));
// const number = Infinity;

// console.log(Number.isFinite(number));
// const number = 100;

// console.log(number.toString(16));
// console.log(Math.max(10, 5, 1));
// console.log(Math.random());

// const generateRandom = (min, max) => {
//     return Math.floor((max - min + 1) * Math.random() + min);
// };
// console.log(generateRandom(1, 3));
// console.log("\u009A");

// let str = "Widget With id";
// console.log(str.indexOf("id", 4));
// console.log(str.slice(1, -1));
// console.log(str.substr(2, 1));
// console.log(str.substring(0, 2));
// console.log(str.replace("Wi", "$"));
// let strt = str;
// while (strt.includes("Wi")) {
//     strt.replace("Wi", "$");
// }
// console.log(strt);

//Регулярные выражения
// let str = "stringStrstr897149872ingstring";
// const result = str.replace(/[^0-9]/gi, "");
// console.log(result);
// let str = "Hello World";
// function strtt(str, n) {
//     let strT = str[n];
//     let result = strT == /[A-Z]/;
//     console.log(result);
//     return result;
// }
// strtt(str, 0);
// console.log(0.1 + 0.2);

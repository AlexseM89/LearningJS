//Условные операторы if/else/elseif
// const age = 20;
// if (age < 18) {
//     console.log("Доступ запрещен!");
// } else if (age >= 18) {
//     console.log("Доступ разрешен");
// } else {
//     console.log("Укажите свой возраст");
// }
//Условный оператор "?" тернарный оператор
// const a = 1;
// const b = 2;
//let result = a > b ? console.log("а больше b") : console.log("а меньше b");

// let result;
// if (a > b) {
//     result = "а больше b";
// } else {
//     result = "а меньше b";
// }
// console.log(result);

// const line1 = 5;
// const line2 = 15;
// const line3 = 20;

// if (line1 > line2) {
//     if (line1 > line3) {
//         console.log("line1- самый длинный отрезок");
//     }
// } else if (line2 > line3) {
//     if (line2 > line3) {
//         console.log("line2-самый длинный отрезок");
//     } else {
//         console.log("line3-самый длинный отрезок");
//     }
// }

// Конструкция типа switch

// const temp
// const role = "admin";
// switch (role) {
//     case "admin":
//         console.log("admin");
//         break;
//     case "user":
//         console.log("user");
//         break;
//     case "manager":
//         console.log("manager");
//         break;
//     default:
//         console.log("кто ты?");
//         break;
// }

// const temp = -35;

// if (temp <= -30) {
//     console.log("Оставайтесь дома");
// } else if (temp <= -10) {
//     console.log("Сегодня холодно");
// } else if (temp <= 5) {
//     console.log("Не холодно");
// } else if (temp <= 15) {
//     console.log("тепло");
// } else if (temp <= 25) {
//     console.log("Очень тпепло");
// } else if (temp < 35) {
//     console.log("Жарко");
// } else {
//     console.log("Пекло");
// }

// Логические операторы &&(и) первое ложное  значение    ||(или) первое истенное знаение

// const a = 0;
// const b = 1;
// let result1 = a || b;
// console.log(result1);
// let result2 = a || false || "value";
// console.log(result2);
// let result3 = false || '' || 0
// console.log(result3);

// const a = 0;
// const b = 1;
// let result1 = a && b;
// console.log(result1);
// let result2 = b && true && "value";
// console.log(result2);

// Логическое ! (НЕ)

// if(!0){
//     console.log("Не сработадл")
// }else if(!1){
// "сработало"
// }else

// const a = "sda";
// console.log("asd" && true && null && 1);
// console.log(0 || (true && "false") || null);
// console.log((0 && true) || ("false" && null));
// console.log(!0 && !!1);
// console.log(!(null || (!"ag" && true)));

//Цыклы while / for  / do while

// while (true) {}
// //бесконечный цыкл тк условие всегда истинно

// do {
//     //тело цыкла
// } while (false);
// //выполниться одна итераиця тк условия ложно

// цикл for

// for (начало; условие; шаг) {
//     //тело цикла
// }

// for (let i = 0; i <= 3; i++) {
//     console.log(i);
// }
// console.log(i);
// let i = 0;
// while (true) {
//     i++;
//     console.log(i);
//     if (i === 5) break;
// }

// for (let i = 0; i <= 3; i++) {
//     if (i === 2) continue;
//     console.log(i);
// }

// mark: for (let j = 0; j < 3; j++) {
//     for (let i = 0; i < 3; i++) {
//         if (i === 1) break mark;
//         console.log("i", i, "j", j);
//         //  break mark;
//     }
// }

// while (true) {}
//  //бесконечный цыкл тк условие всегда истинно
// let count = 5;
// while (count > 0) {
//     console.log("Строка " + count);
//     count--;
// }

// let vsego = 100;
// let metka = 20;
// let day = 1;
// while (vsego > metka) {
//     vsego = vsego / 2;
//     console.log("Осталось авто", vsego);
//     day++;
// }
// console.log(day);

let N = 32;
let M = 5;
// let counterDays = 1;
// while (N >= M) {
//     N = N / 2;
//     counterDays++;
//     console.log(counterDays);
// }
for (var day = 1; N >= M; day++) {
    N = N / 2;
    console.log(day);
}
// console.log(day);

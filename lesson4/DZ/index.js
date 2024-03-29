/* 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. */
const resultSq = function square(num) {
    return num ** 2;
};
console.log("#1 Смотрим какой результат вернет функция: ", resultSq(2));

/* 2. Сделайте функцию, которая возвращает сумму двух чисел. */

const resultSum = function sum(num1, num2) {
    return num1 + num2;
};
console.log("#2 Смотрим какой результат вернет функция: ", resultSum(2, 3));

/* 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. */

const result = function sum(arg1, arg2, arg3) {
    return (arg1 - arg2) / arg3;
};
console.log("#3 Смотрим какой результат вернет функция: ", result(9, 1, 4));

/* 4. Сделайте функцию, которая принимает параметром число от 1 до 7, 
а возвращает день недели на русском языке. */

function weekDay(arg) {
    let resultDay;
    if (arg >= 1 && arg <= 7) {
        switch (arg) {
            case 1:
                resultDay = "Понедельник";
                break;
            case 2:
                resultDay = "Вторник";
                break;
            case 3:
                resultDay = "Среда";
                break;
            case 4:
                resultDay = "Четверг";
                break;
            case 5:
                resultDay = "Пятница";
                break;
            case 6:
                resultDay = "Суббота";
                break;
            case 7:
                resultDay = "Воскресенье";
                break;
            default:
                resultDay = "Что-то пошло не так";
                break;
        }
    } else {
        console.log(
            "Переменная arg может принимать 7 значений: 1, 2, 3, 4, 5,6 или 7"
        );
    }
    return console.log("#4 ", resultDay);
}
weekDay(1);
weekDay(2);
weekDay(3);
weekDay(4);
weekDay(5);
weekDay(6);
weekDay(7);
weekDay(-7);
weekDay(0);
weekDay(8);
weekDay("8");

/* 5. Сделайте функцию, которая параметрами принимает 2 числа. 
Если эти числа равны - пусть функция вернет true, а если не равны - false. */

const compare = function showCompare(numb1, numb2) {
    let resCompare;
    if (typeof numb1 === "number" && typeof numb2 === "number") {
        if (numb1 === numb2) {
            resCompare = "true";
        } else {
            resCompare = "false";
        }
    } else {
        console.log("Введите числа");
    }
    return console.log("#5", resCompare);
};
compare(2, 3);
compare(2, 2);

/* 6.  Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть вернет true, а если нет то - false. */

const numEqual = function equal(argA, argB) {
    let sum = argA + argB;
    let result;
    sum > 10 ? (result = true) : (result = false);
    return console.log("№6", result);
};
numEqual(2, 2);
numEqual(9, 2);

/* 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
 Если отрицательное - пусть функция вернет true, а если нет - false. */

const negativeNum = function negative(numb) {
    let result;
    numb < 0 ? (result = true) : (result = false);
    return console.log("№7", result);
};
negativeNum(-2);
negativeNum(2);

/* 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
 что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */

function isNumberInRange(n) {
    let result;
    n > 0 && n < 10 ? (result = true) : (result = false);
    return console.log("№8", result);
}
isNumberInRange(2);
isNumberInRange(0);

/* 9. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false. */

function isEven(numEve) {
    let result;
    numEve % 2 == 0 ? (result = true) : (result = false);
    return console.log("№9", result);
}
isEven(4);
isEven(55);

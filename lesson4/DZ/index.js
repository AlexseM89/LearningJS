/* 1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. */
// Function Expression
const resultSq = function square(num) {
    return num ** 2;
};
console.log("#1-FE Смотрим какой результат вернет функция: ", resultSq(2));

// Function Declaration
function resultSq2(num) {
    return num ** 2;
}
console.log("#1-FD Смотрим какой результат вернет функция: ", resultSq2(3));

//Arrow  Function Expressions
const resultSq3 = (num) => num ** 2;
console.log("#1-AFE Смотрим какой результат вернет функция:", resultSq3(4));

/* 2. Сделайте функцию, которая возвращает сумму двух чисел. */
// Function Expression
const resultSum = function sum(num1, num2) {
    return num1 + num2;
};
console.log("#2-FE Смотрим какой результат вернет функция: ", resultSum(2, 3));

// Function Declaration
function resultSum2(num1, num2) {
    return num1 + num2;
}
console.log("#2-FD Смотрим какой результат вернет функция: ", resultSum2(2, 4));

//Arrow  Function Expressions
const resultSum3 = (num1, num2) => num1 + num2;
console.log(
    "#2-AFE Смотрим какой результат вернет функция: ",
    resultSum3(2, 7)
);

/* 3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. */
// Function Expression
const result = function sum(arg1, arg2, arg3) {
    return (arg1 - arg2) / arg3;
};
console.log("#3-FE Смотрим какой результат вернет функция: ", result(9, 1, 4));

// Function Declaration
function sum2(arg1, arg2, arg3) {
    return (arg1 - arg2) / arg3;
}
console.log("#3-FD Смотрим какой результат вернет функция: ", sum2(9, 1, 2));

//Arrow  Function Expressions
const sum3 = (arg1, arg2, arg3) => (arg1 - arg2) / arg3;
console.log("#3-AFE Смотрим какой результат вернет функция: ", sum3(5, 1, 2));

/* 4. Сделайте функцию, которая принимает параметром число от 1 до 7, 
а возвращает день недели на русском языке. */
// Function Expression
const resWeekDay = function weekDay(arg) {
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
    return console.log("#4-FE", resultDay);
};
resWeekDay(1);

// Function Declaration
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
    return console.log("#4-FD", resultDay);
}
weekDay(1);

//Arrow  Function Expressions
const weekDay3 = (arg) => {
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
    return console.log("#4-AFE", resultDay);
};
weekDay3(1);
/* 5. Сделайте функцию, которая параметрами принимает 2 числа. 
Если эти числа равны - пусть функция вернет true, а если не равны - false. */
// Function Expression
const compare = function showCompare(numb1, numb2) {
    let resCompare;
    if (typeof numb1 === "number" && typeof numb2 === "number") {
        if (numb1 === numb2) {
            resCompare = true;
        } else {
            resCompare = false;
        }
    } else {
        console.log("Введите числа");
    }
    return console.log("#5-FE", resCompare);
};
compare(2, 3);
compare(2, 2);

// Function Declaration
function showCompare(numb1, numb2) {
    let resCompare;
    if (typeof numb1 === "number" && typeof numb2 === "number") {
        if (numb1 === numb2) {
            resCompare = true;
        } else {
            resCompare = false;
        }
    } else {
        console.log("Введите числа");
    }
    return console.log("#5-FD", resCompare);
}
showCompare(2, 3);
showCompare(2, 2);

//Arrow  Function Expressions
const showCompare3 = (numb1, numb2) =>
    numb1 === numb2
        ? console.log("#5-AFE", true)
        : console.log("#5-AFE", false);
showCompare3(2, 3);
showCompare3(2, 2);

/* 6.  Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть вернет true, а если нет то - false. */
// Function Expression
const numEqual = function equal(argA, argB) {
    let sum = argA + argB;
    let result;
    sum > 10 ? (result = true) : (result = false);
    return console.log("#6-FE", result);
};
numEqual(2, 2);
numEqual(9, 2);

// Function Declaration
function equal(argA, argB) {
    let sum = argA + argB;
    let result;
    sum > 10 ? (result = true) : (result = false);
    return console.log("#6-FD", result);
}
equal(2, 2);
equal(9, 2);

//Arrow  Function Expressions
const equal3 = (argA, argB) => {
    let sum = argA + argB;
    let result;
    sum > 10 ? (result = true) : (result = false);
    return console.log("#6-AFE", result);
};
equal3(2, 2);
equal3(9, 2);
/* 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
 Если отрицательное - пусть функция вернет true, а если нет - false. */
// Function Expression
const negativeNum = function negative(numb) {
    let result;
    numb < 0 ? (result = true) : (result = false);
    return console.log("#7-FE", result);
};
negativeNum(-2);
negativeNum(2);

// Function Declaration
function negative2(numb) {
    let result;
    numb < 0 ? (result = true) : (result = false);
    return console.log("#7-FD", result);
}
negative2(-2);
negative2(2);

//Arrow  Function Expressions
const negative3 = (numb) => {
    let result;
    numb < 0 ? (result = true) : (result = false);
    return console.log("#7-AFE", result);
};
negative3(-2);
negative3(2);

/* 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
 что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */
// Function Expression
const funcisNumberInRange = function isNumberInRange(n) {
    let result;
    n > 0 && n < 10 ? (result = true) : (result = false);
    return console.log("#8-FE", result);
};
funcisNumberInRange(2);
funcisNumberInRange(0);

// Function Declaration
function isNumberInRange(n) {
    let result;
    n > 0 && n < 10 ? (result = true) : (result = false);
    return console.log("#8-FD", result);
}
isNumberInRange(2);
isNumberInRange(0);

//Arrow  Function Expressions
const isNumberInRange3 = (n) => {
    let result;
    n > 0 && n < 10 ? (result = true) : (result = false);
    return console.log("#8-AFE", result);
};
isNumberInRange3(2);
isNumberInRange3(0);

/* 9. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false. */
// Function Expression
const funcisEven = function isEven(numEve) {
    let result;
    numEve % 2 == 0 ? (result = true) : (result = false);
    return console.log("#9-FE", result);
};
funcisEven(4);
funcisEven(55);

// Function Declaration
function isEven(numEve) {
    let result;
    numEve % 2 == 0 ? (result = true) : (result = false);
    return console.log("#9-FD", result);
}
isEven(4);
isEven(55);

//Arrow  Function Expressions
const isEven3 = (numEve) => {
    let result;
    numEve % 2 == 0 ? (result = true) : (result = false);
    return console.log("#9-AFE", result);
};
isEven3(4);
isEven3(55);

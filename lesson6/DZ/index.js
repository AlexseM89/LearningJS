/* 1. Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.*/

const array = ["Используя", "метод", "напишите", "код"];
function getArrayLenght(array) {
    return (array = array.map((word) => word.length));
}
console.log("#1:", getArrayLenght(array));

/* 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Используя метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, 
в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.*/

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(arr) {
    const result = [];
    arr.reduce((accum, item, index) => {
        return (result[index] = accum += item);
    }, 0);
    return result;
}
console.log("#2:", currentSums(numbers));

/* 3. Напишите код, который получает из массива чисел новый массив, 
содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.*/

const numbers3 = [2, 3, 0, 1, 4, 5, 6, 7, 8, 9, 10, 0, 7, 4];
function sumSeven(numbers3) {
    const res = [];
    for (let i = 0; i < numbers3.length; i++) {
        for (let j = i + 1; j < numbers3.length; j++) {
            if (numbers3[i] + numbers3[j] == 7) {
                res.push(`${numbers3[i]}:${numbers3[j]}`);
            }
        }
    }
    return res;
}
console.log("#3:", sumSeven(numbers3));

/* 4. Напишите код, создающий массив, который будет состоять из первых букв слов строки str. */

const str4 =
    "Напишите код, создающий массив, который будет состоять из первых букв слов строки str";
function arrayFirstChar(str) {
    return str.split(" ").map((char) => char[0]);
}
console.log("#4:", arrayFirstChar(str4));

/* 5. Напишите код, создающий массив, 
который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.*/

const str5 = "012345";
function createStr(str) {
    let resArray = [];
    str.split("").forEach((item, i, array) => {
        resArray.push(
            `${array[i - 1] ? array[i - 1] : ""}${item}${
                array[i + 1] ? array[i + 1] : ""
            }`
        );
    });
    return resArray;
}
console.log("#5:", createStr(str5));

/* 6. Напишите код, преобразующий массив цифр,которые располагаются
 неупорядоченно, в массив цифр расположенных по убыванию их значений.*/

const arr6 = [5, 3, 1, 7, 4, 3, 2, 9, 8, 0, -1, -5];
console.log("#6:", arr6.sort().reverse());

/* 7. Напишите код, объединяющий три массива цифр, и располагающий цифры,
 в полученном массиве, в порядке убывания их значений через пробел.*/

const arr7_1 = [3, 5, 7, 8];
const arr7_2 = [6, 2, 1, 9, 7];
const arr7_3 = [7, 5, 2, 7, 2, 6];

arr7 = arr7_1
    .concat(arr7_2, arr7_3)
    .sort()
    .reverse()
    .join("  ")
    .split(" ")
    .map((el) => (el == "" ? (el = " ") : Number.parseInt(el)));

console.log("#7:", arr7);

/* 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
 Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. */

const arr8 = [[1, 2, 3], [4, 5], [6]];
let arrRes = arr8.flat().reduce((a, b) => a + b);
console.log("#8:", arrRes);

/* 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.*/
const arr9 = [1, 2, 3, 4, 5, 6];
arr9.sort((a, b) => b - a);
console.log("#9:", arr9);

/* 10. Дан массив с числами. Узнайте сколько элементов 
с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resArr10 = [];
arr10.reduce((sum, current) => {
    sum < 11 ? resArr10.push(current) : "";
    return (sum += current);
}, 0);
console.log("#10:", resArr10.length);

/* 11. Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. 
Первым параметром функция принимает значение, которым заполнять массив, 
а вторым - сколько элементов должно быть в массиве.
 Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. */

function arrayFill(char, quantity) {
    return char.repeat(quantity).split("");
}
console.log("#11:", arrayFill("x", 5));

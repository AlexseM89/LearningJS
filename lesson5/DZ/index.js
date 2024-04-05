/* 1. Преобразовать строку в массив слов. Напишите функцию stringToarray(str), 
которая преобразует строку в массив слов. */

const str = "Преобразовать строку в массив слов.";
function stringToarray(str) {
    return str.split(" ");
}
console.log("#1: ", stringToarray(str));

/* 2. Напишите функцию deleteСharacters(str, length),
 которая возвращает подстроку, состоящую из указанного количества символов. */

const str2 =
    "Напишите функцию, которая возвращает подстроку, состоящую из указанного количества символов";
function deleteСharacters(str, length) {
    return str.slice(0, length);
}
console.log("#2:", deleteСharacters(str2, 19));

/* 3. Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
 При этом все символы строки необходимо перевести в верхний регистр. */

const str3 =
    "Напишите функцию которая принимает строку str в качестве аргумента и вставляет тире";
function insertDash(str) {
    return str.replace(/ /g, "-").toUpperCase();
}
console.log("#3:", insertDash(str3));

/* 4. Напишите функцию, которая принимает строку в качестве аргумента и 
преобразует регистр первого символа строки из нижнего регистра в верхний. */
const str4 =
    "преобразует регистр первого символа строки из нижнего регистра в верхний.";
function replaceFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log("#4:", replaceFirstLetter(str4));

/*5. Напишите функцию capitalize(str), которая возвращает строку, 
в которой каждое слово начинается с заглавной буквы. */
const str5 =
    "Напишите функцию которая возвращает строку в которой каждое слово начинается с заглавной буквы.";
function capitalize(str) {
    return str
        .split(" ") //делим строку на массив через пробел
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" "); //массив объединяем в строку
}
console.log("#5:", capitalize(str5));

/* 6. Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный.
 Например, если вводится «», то на выходе должно быть «кАжДыЙ оХоТнИк». */
const str6 = "КаЖдЫй ОхОтНиК ЖеЛаЕт ЗнАтЬ ГдЕ СиДиТ ФаЗаН";
function changeRegister(str) {
    return str
        .split("")
        .map((char) =>
            char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase()
        )
        .join("");
}

console.log("#6:", changeRegister(str6));

/* 7. Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов. */
const str7 =
    "ABS Напишите|||//\\ функцию*&^% которая возвращает строку,&*^%$#@!_)(*+_=- очищенную 555 от всех не буквенно-цифровых *&^%$# символов.*&()(()";
function removeChar(str) {
    return str
        .split("")
        .filter((char) => {
            const code = char.charCodeAt(0);
            return (
                (code > 47 && code < 58) ||
                (code > 64 && code < 91) ||
                (code > 96 && code < 123) ||
                (code > 1039 && code < 1104) ||
                (code > 1024 && code < 1106) ||
                code === 32
            );
        })
        .join("");
}

console.log("#7:", removeChar(str7));

/* 8. Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение
 с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента. */

function zeros(num, len, sign) {
    let numtext = num + "";
    for (let i = numtext.length; i < len; i++) {
        numtext = numtext + "0";
    }
    return Number(sign + numtext);
    // return  sign + numtext     //  Если ответ нужен в виде строки то вернем данный return
}
console.log("#8:", zeros(23, 3, "-"));
console.log("#8:", zeros(3, 2, "+"));

/* 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.*/

const str1 = "Строка Один и Два";
const str92 = "Строка один и Два и Три";
const strTEST = "Строка один и два";
function comparison(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase() ? "Равны" : "Не равны";
}

console.log("#9:", comparison(str1, str92));
console.log("#9:", comparison(str1, strTEST));

/* 10. Напишите функцию insensitiveSearch(str1, str2), 
которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.*/

const str10_1 = "осуществляет поиск подстроки";
const str10_2 = "поиск";
const str10_3 = "учёт";
function insensitiveSearch(str1, str2) {
    return str1.indexOf(str2) === -1
        ? "Нет такой подстроки"
        : "Ура! Подстрока найдена!";
}

console.log("#10:", insensitiveSearch(str10_1, str10_2));
console.log("#10:", insensitiveSearch(str10_1, str10_3));

/* 11. Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в camelCase, 
при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.*/
const str11 = "Несколько слов пишутся слитно без пробелов";
function initCap(str) {
    return (
        str.at(0).toLowerCase() +
        str
            .split(" ")
            .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
            .join("")
            .slice(1)
    );
}

console.log("#11:", initCap(str11));

/* 12. Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из camelCase в snake_case,
 при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы. */
const str12 = "несколькоСловПишутсяСлитноБезПробелов";
const str12en = "initShakeStrTo";
function initSnake(str) {
    return str.replace(/([а-я])([А-Я])/g, "$1_$2").toLowerCase();
    // return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase(); // это если english
}

console.log("#12:", initSnake(str12));
// console.log("#12:", initSnake(str12en));

/* 13. Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.*/

function repeatStr(str, n) {
    return str.repeat(n);
}
console.log("#13:", repeatStr("Напишите", 5));

/* 14. Напишите функцию path(pathname), которая возвращает имя файла 
(подстрока после последнего символа "/" ) из полного пути к файлу. */
//unix
// function path(pathname) {
//     return pathname.split("/").at(-1);
// }
// console.log("#14:", path("Lad/JS/Lesson5/index.js"));
//win
function path(pathname) {
    return pathname.split("\\").at(-1);
}
console.log("#14:", path("C:\\Lad\\JS\\Lesson5\\index.js"));

/* 15. Создайте функцию endsWith(), который сравнивает подстроку str1 
с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.*/

const str15 = "Определяет заканчивается ли строка символами подстроки";
const str15_2 = "подстроки";
const str15_3 = "подстрокА";

function endsWith(str1, str2) {
    return str1.toLowerCase().endsWith(str2.toLowerCase())
        ? "Строка заканчивается символами подстроки"
        : "Строка НЕ заканчивается символами подстроки";
}
console.log("#15:", endsWith(str15, str15_2));
console.log("#15:", endsWith(str15, str15_3));

/* 16. Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, 
расположенную после или до указанного символа char в зависимости от параметра pos. */

const str16 = "Функция которая возвращает часть строки";
function getSubstr(str, char, pos) {
    let searchIndex = str.indexOf(char);
    return pos === "before"
        ? str.slice(0, searchIndex)
        : str.slice(searchIndex + char.length);
}
console.log("#16:", getSubstr(str16, "щ", "before"));
console.log("#16:", getSubstr(str16, "щ", "after"));

/* 17. Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str.
 По умолчанию подстрока вставляется в начало строки.*/
const str17 =
    "Напишите функцию, которая вставляет подстроку substr в указанную позицию";
function insert(str, substr, pos = 0) {
    return str.slice(0, pos) + substr + str.slice(pos);
}

console.log("#17:", insert(str17, "JS ", 9));
console.log("#17:", insert(str17, "JS "));

/* 18. Напишите функцию limitStr(str, n, symb),
 которая обрезает строку, если она длиннее указанного количества символов n. 
 Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.*/
const str18 =
    "Функция которая обрезает строку, если она длиннее указанного количества символов";
function limitStr(str, n, symb = "...") {
    return str.length > n ? str.slice(0, n) + symb : str;
}

console.log("#18:", limitStr(str18, 12, "."));
console.log("#18:", limitStr(str18, 12));
console.log("#18:", limitStr(str18, 112));

/* 19. Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.*/

const str19 = "Которая возвращает количество символов";
function count(str, stringsearch) {
    return [...str.matchAll(stringsearch)].length;
}

console.log("#19:", count(str19, "во"));
console.log("#19:", count(str19, "я"));

/* 20. Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.*/
const str20 =
    "   Напишите функцию,     которая     удаляет      все     лишние       пробелы     из      строки     str.  ";
function strip(str) {
    return str
        .split(" ")
        .filter((word) => word !== "")
        .join(" ");
}

console.log("#20:", strip(str20));

/* 21. Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.*/

const str21 = "Напишите функцию, которая удаляет лишние слова из строки";
function cutString(str, n) {
    return str.split(" ", n).join(" ");
}

console.log("#21:", cutString(str21, 5));

/* 22. Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.*/
const str22 =
    "Напишите функцию, которая проверяет, существует ли в строке str слова";
function findWord(word, str) {
    return str.match(word) != null
        ? "Существуют слова word"
        : "Не существуют слова word";
}
console.log("#22:", findWord("ли", str22));
console.log("#22:", findWord("Привет", str22));

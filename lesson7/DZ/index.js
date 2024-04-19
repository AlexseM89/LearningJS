/* 1. Что выведет функция?*/
function f() {
    alert(this);
}

let user = {
    g: f.bind(null),
};

user.g();
//в терминале выводит  ReferenceError: alert is not defined - нет такого метода alert
//в консоле Google Chrome alert вывел [object Window]

/* 2. Можем ли мы изменить this дополнительным связыванием?*/
function f() {
    console.log(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();
//Можно сделать новую привязку, но нельзя изменить существующую.

/* 3. В свойство функции записано значение. Изменится ли оно после применения bind? */

function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася",
});

console.log(bound.test);
//console.log вернет undefined.
//методу bind мы передаем  объект(контекст) {name: "Вася"}. У этого объекта уже нет свойства test.

/* 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль 
и затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему?
*/
function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

let user4 = {
    name: "Вася",

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

askPassword(user4.loginOk.bind(user), user4.loginFail.bind(user));
//Ошибка в том что происходит потеря контекста при передаче во внешнюю функцию

/* 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail 
у него есть только одна – user.login(true/false).
Что нужно передать в вызов функции askPassword в коде ниже,
 чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?*/

function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

let user5 = {
    name: "John",

    login(result) {
        alert(this.name + (result ? " logged in" : " failed to log in"));
    },
};

askPassword(user5.login.bind(user5, true), user5.login.bind(user5, false));
//используем объект user в качестве контекста и передаем первый аргумент fun.bind(thisArg[, arg1[, arg2[, ...]]])

/* 6. Напишите в указанном месте конструкцию с методом bind() так,
 чтобы this внутри функции func всегда указывал на value.
из переменной elem.
 */
const elem = { value: "Привет" };

function func(surname, name) {
    alert(this.value + ", " + surname + " " + name);
}

//Тут напишите конструкцию с bind()
let funcElem = func.bind(elem);
funcElem("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

/* 7. Есть функция которая складывает три числа.Выполните каррирование.
const sum = (a, b, c) => a + b + c*/
function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
}

console.log("#7:", sum(1)(2)(3));

/* 8. Реализовать таймер-функцию используя замыкания. Функция принимает два  
аргумента начальное значение и значение завершения. Таймер движется назад.
При достижении точки завершения в консоль выводится значение таймера и 
сообщение о завершении работы таймера.*/

function createTimer(start, end) {
    let count = start;
    return function timer() {
        count--;
        console.log(count);
        if (count > end) {
            console.log(`До старта ${count} секунд`);
            timer();
        } else {
            console.log(`До старта ${count} секунд. Поехали!`);
        }
    };
}
let start = createTimer(10, 0);
start();

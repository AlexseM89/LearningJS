/* 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
 name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
   Зарплата - это произведение (умножение)
 ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.*/

// class Worker {
//     constructor(name, surname, rate, days) {
//         (this.name = name),
//             (this.surname = surname),
//             (this.rate = rate),
//             (this.days = days);
//     }
//     getSalary() {
//         console.log(`${this.rate}` * `${this.days}`);
//     }
//     getFullName() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// const firstWorker = new Worker("Alexsander", "Pushkin", 100, 30);
// const secondWorker = new Worker("Lev", "Tolstoy", 500, 20);
// firstWorker.getFullName();
// firstWorker.getSalary();
// secondWorker.getFullName();
// secondWorker.getSalary();

/* 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания.
 Появляется новые свойство: workers - количество работников. И зарплата считается по другому: 
произведение (умножение) ставки rate на количество отработанных дней и на количество работников.*/

// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days);
//         this.workers = workers;
//     }
//     getSalary() {
//         console.log(`${this.rate}` * `${this.days}` * `${this.workers}`);
//     }
// }

// const ilonMask = new Boss("Ilon", "Mask", 100, 30, 2);
// ilonMask.getFullName();
// ilonMask.getSalary();

/* 3. Модифицируйте класс Worker из предыдущей задачи следующим образом:
 для свойства rate и для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения.*/

class Worker {
    constructor(name, surname, rate, days) {
        (this.name = name),
            (this.surname = surname),
            (this.rate = rate),
            (this.days = days);
    }
    get rate() {
        return this._rate;
    }
    set rate(value) {
        this._rate = value;
    }
    get days() {
        return this._days;
    }
    set days(value) {
        this._days = value;
    }
    getSalary() {
        console.log(`${this.rate}` * `${this.days}`);
    }
    getFullName() {
        console.log(`${this.name} ${this.surname}`);
    }
}
const firstWorker = new Worker("Alexsander", "Pushkin", 100, 30);
console.log(firstWorker);
firstWorker.rate = 200;
console.log(firstWorker);
firstWorker.days = 20;
console.log(firstWorker);

/* 4. Реализуйте класс MyString, который будет иметь следующие методы: 
метод reverse(), который параметром принимает строку, а возвращает ее в 
перевернутом виде, метод ucFirst(), который параметром принимает строку, 
а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {
    constructor(str) {
        this.str = str;
    }
    reverse() {
        console.log(this.str.split("").reverse().join(""));
    }
    ucFirst() {
        console.log(
            this.str.charAt(0).toUpperCase() + this.str.toLowerCase().slice(1)
        );
    }
    ucWords() {
        console.log(
            this.str
                .toLowerCase()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.substr(1))
                .join(" ")
        );
    }
}

const firstString = new MyString(
    "реализуйте класс который Будет иметь следующие Методы"
);
firstString.reverse();
firstString.ucFirst();
firstString.ucWords();

/* 5. Реализуйте класс Validator, который будет проверять строки.
 К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
  является ли она корректным емейлом или нет. Если является - возвращает true,
   если не является - то false. Кроме того, класс будет иметь следующие методы:
    метод isDomain для проверки домена,
 метод isDate для проверки даты и метод isPhone для проверки телефона.*/
class Validator {
    constructor() {}
    isEmail(str) {
        return (
            str.indexOf("@") !== -1 &&
            str.indexOf(".") !== -1 &&
            str.indexOf("mail") !== -1
        );
    }
    isDomain(str) {
        return str.indexOf(".com") !== -1 || str.indexOf(".ru") !== -1;
    }
    isDate(str) {
        return str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/) != null ? true : false;
    }
    isPhone(str) {
        return str.match(/\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/) != null
            ? true
            : false;
    }
}
let stringValid = new Validator();
console.log(stringValid.isEmail("melenchuk89@gmail.com"));
console.log(stringValid.isEmail("melenchuk89@mail.ru"));
console.log(stringValid.isEmail("melenchuk89@com"));
console.log(stringValid.isDomain("https://yandex.ru"));
console.log(stringValid.isDomain("https://яндекс.рф"));
console.log(stringValid.isDate("19.04.2024"));
console.log(stringValid.isDate("19.04.24"));
console.log(stringValid.isPhone("+7(915)939-52-00"));
console.log(stringValid.isPhone("+375(915)939-52-00"));

/* 6. Реализуйте класс Student (Студент), который будет наследовать от класса User,
 подобно тому, как это сделано в теоретической части урока.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен иметь метод getFullName() (наследуется от User),
с помощью которого можно вывести одновременно имя и фамилию студента.
Также класс должен иметь метод getCourse(), который будет выводить 
текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года
отнятьгод поступления в вуз.
Текущий год получите самостоятельно с помощью new Date.*/

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        console.log(`${this.name} ${this.surname}`);
    }
}
class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    getCourse() {
        const thisYear = new Date().getFullYear();
        const course = thisYear - this.year;
        console.log(course + " курс");
    }
}

const studentFirst = new Student("Anton", "Chehov", 2023);
const studentSecond = new Student("Ilon", "Mask", 2020);
studentFirst.getFullName();
studentFirst.getCourse();
studentSecond.getFullName();
studentSecond.getCourse();

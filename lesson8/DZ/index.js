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

/* */

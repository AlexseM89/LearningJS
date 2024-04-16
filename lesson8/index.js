//Class ООП
// const animal = {
//     isLive: true,
//     hasHead: true,
// };

// const dog = {
//     name: "Sharik",
//     isTail: true,
//     isLive: false,
// };

// const human = {
//     name: "Aleksei",
//     isTail: false,
// };
// dog.__proto__ = animal;
// console.log(dog);
// console.log(dog.isLive);

// //Функции конструкторы  до классов
// function CreateName(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sayHi = function () {
//     //     console.log("Меня зовут: " + this.name);
//     // };
// }
// CreateName.prototype.sayHi = function () {
//     console.log("Меня зовут: " + this.name);
// };
// let firstUser = new CreateName("Alexsei", 34);
// console.log(firstUser.name);
// let seconUser = new CreateName("Alenka", 32);
// console.log(seconUser.name);
// seconUser.sayHi();
// console.log(typeof CreateName.prototype);

// function CreatePostcards(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function () {
//         console.log(this.from + this.to);
//     };
// }
// CreatePostcards.prototype.changeFrom = function (newFrom) {
//     this.from = newFrom;
// };

// let postCard = new CreatePostcards("NN-", "-Minsk");
// console.log(postCard);
// postCard.show();
// postCard.changeFrom("Moscow");
// console.log(postCard);
// postCard.show();

//Class

// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log("Меня зовут: " + this.name);
//     }
// }

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.isLive = true;
//     }
//     sayName() {
//         console.log("Животное : ", this.name);
//     }
// }

// const dog = new Animal("Sharik");
// dog.sayName();

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//         this.isTail = true;
//     }
//     sayHi() {
//         console.log("Gav");
//     }
// }
// const dog2 = new Dog("Sharik");
// console.log(dog2);
// dog2.sayHi();
// dog2.sayName();

// class User {
//     get name() {
//         return this._name + " пользователь";
//     }
//     set name(value) {
//         // return (this._name = value);
//         value.length < 5
//             ? console.log("Слишком короткое имя")
//             : (this._name = value);
//     }
// }
// const user = new User();
// user.name = "Aleksei";
// // user.name = "Aleksei";
// console.log(user);

class People {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        console.log(this.name + " " + this.surname);
    }
}

class Worker extends People {
    constructor(name, surname, rate, day) {
        super(name, surname);
        this.rate = rate;
        this.day = day;
    }
    getSalary() {
        console.log(this.day * this.rate);
    }
}

const peopleOne = new People("Alex", "Pushkin");
console.log(peopleOne);
const peopleTwo = new People("Anna", "Lermontova");
console.log(peopleTwo);
const peopleThree = new Worker("Aleksei", "Tolstoy", 20, 100);
console.log(peopleThree);
peopleThree.getSalary();
peopleThree.getFullName();

//Занятие 7
// Продвинутая работа с Функциями
//   THIS

// function getThis() {
//     console.log(this);
// }
// getThis();

// let place = {
//     name: " N",
//     people: 1000,
//     getName,
// };
// let city = {
//     name: "Minsk",
//     people: 20000000,
//     getName: getName,
//     setName(cityName) {
//         this.name = cityName;
//     },
// };

// function getName() {
//     return this.name;
// }
// city.setName("NN");
// console.log(city);
// console.log(place.getName());

// function getName(people = 0) {
//     return this.name + " численность " + people;
// }
// console.log(getName.call(place));
// console.log(getName.apply(place, [50000]));

// //EventLoop Куки
// document.cookie = "name=Aleksey";
// document.cookie = "age=34";
// // httpOnly
// //localStorage sessionStorage
// localStorage.setItem("name", "Aleksey");
// const obj = { car: "audi", year: 2024 };
// localStorage.setItem("nameCar", JSON.stringify(obj));
// const carJson = localStorage.getItem("nameCar");
// console.log(JSON.parse(carJson));
// // localStorage.clear();
// sessionStorage.setItem("name", "Aleksey");
// sessionStorage.setItem("nameCar", JSON.stringify(obj));

// //promise

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Aleksei"), 2000);
// });

// const posts = fetch("https://jsonplaceholder.typicode.com/posts");
// posts
//     .then((response) => response.json())
//     .then((response) => {
//         response.map((el) => {
//             const post = document.createElement("li");
//             post.innerHTML = `<h2>${userId} ${el.title} ${el.id}</h2>`;
//             list.append(post);
//         });
//     })
//     .catch(() => console.error("Error!"))
//     .finally(() => console.log("END"));

// // console.log(posts);
// promise
//     .then((result) => console.log(result))
//     .catch((e) => console.error("Uuups"))
//     .finally(() => console.log("End"));

// const list = document.querySelector(".list");

const promise = new Promise((resolve, reject) => {
    resolve("promise");
});
console.log("start");
setTimeout(() => console.log("timeout"), 0); //macrotasks
promise.then((result) => console.log(result)); //promis microtasks
console.log("finish");

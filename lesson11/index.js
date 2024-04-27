//async await делегирование Обработка ошибок try...catch
// console.log("sd");
// const error = new Error("Test error");
// console.error(error.message);
// console.error(error.name);
// // console.error(Object.keys(error));
// console.warn(error.name);

// try {
//     throw error;
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log("Finally");
// }
// setTimeout(() => {
//     try {
//         throw new Error("Test error");
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log("Finally");
//     }
// }, 1000);

//Работа с открытым API
// https://reqres.in/

// XMLHttpRequest
// const sendRequest = () => {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://reqres.in/api/products/3", true);
//     xhr.onload = function () {
//         console.log(xhr.responseText);
//     };
//     xhr.send();
// };

const button = document.querySelector("button");
// button.addEventListener("click", fetchData);

// fetch
// const fetchData = async () => {
//     try {
//         let data = await fetch("https://reqres.in/api/products/3");
//         data = await data.json();
//         console.log(data);
//         return data;
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log("end");
//     }
// };

// const button = document.querySelector(".button");
// const posts = document.querySelector(".posts");

// const createCustomElement = (text) => {
//     const element = document.createElement("li");
//     element.innerHTML = `<h3>${text}</h3>`;
//     postList.append(element);
//     return element;
// };
// const fetchPosts = async () => {
//     postList.innerHTML = "";
//     const loader = createCustomElement("Loading....");

//     try {
//         // posts.removeChild();
//         let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//         data = await data.json();
//         data.map((post) => {
//             const li = document.createElement("li");
//             li.innerHTML = `<h3>${post.title}</h3>`;
//             postList.append(li);
//         });
//         console.log(data);
//         return data;
//     } catch (e) {
//         const li = document.createElement("li");
//         li.innerHTML = `<h3>Что-то пошло не так...</h3>`;
//         li.style.color = "red";
//         postList.append(li);
//         console.error(e);
//     } finally {
//         loader.remove();
//         console.log("end");
//     }
// };
// button.addEventListener("click", fetchPosts);

const sendPost = (post) => {
    try {
        let data = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(post),
        });
        console.log(data);
        return data;
    } catch (e) {
        console.error(e);
    }
};
button.addEventListener("click", () => sendPost({ id: 1, text: "text" }));

const map = new Map([
    ["key1", "value"],
    ["key2", "value2"],
]);
console.log(map);

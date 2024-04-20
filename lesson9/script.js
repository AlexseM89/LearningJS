// console.log(screen);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();

console.log([...document.body.childNodes]);
console.log([...document.body.children]);
// const list = document.getElementById("list");
// console.log(list);
// const list1 = document.querySelector("#list");
// console.log(list1);
// const li = document.getElementsByClassName("item");
// const li1 = document.querySelector(".item");
// const li2 = document.querySelectorAll(".item");
// console.log([...li]);
// console.log(li1);
// console.log([...li2]);

// const h1 = document.querySelector("h1");
// h1.innerHTML += "NEW <span> DOM</span>";
// // h1.outerHTML += "NEw <span> DOM</span>";
// h1.style.backgroundColor = "grey";
// h1.className = "title";
// h1.classList.add("title");

// h1.addEventListener("click", () => h1.classList.toggle("title"));

// const info = document.createElement("div");
// info.classList.add("title");
// info.innerText = " Info";
// // document.body.append(info);
// document.body.prepend(info);
// h1.after;

const header = document.createElement("header");
const container = document.createElement("section");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const h1 = document.querySelector("h1");

header.innerHTML = "Header";
button.innerText = "Buttom";
header.style.backgroundColor = "grey";
header.style.height = "100px";
header.classList.add("header");

container.classList.add("container");

h1.innerText = "Todo";
ul.innerText = "To DO list";
li.innerText = "todo1";
li1.innerText = "todo2";
li2.innerText = "todo3";

document.body.append(header);
document.body.append(container);

container.append(h1);
container.append(input);
container.append(button);
container.append(ul);
ul.append(li);
ul.append(li1);
ul.append(li2);

const handlerInput = () => {
    input.value = " ";
    console.log("blur");
};

// input.addEventListener("focus", () => console.log("focus"));
input.addEventListener("focus", (event) => console.log(event));
// input.onfocus = () => console.log("focus");
input.addEventListener("blur", handlerInput);
// let addLi = () => {
//     let li = document.createElement("li");
//     li.innerText = input.innerText;
//     ul.append(li);
// };
// button.addEventListener("click", addLi);

let inputValue = "";
input.addEventListener("input", (event) => {
    inputValue = event.target.value;
});
const resetInput = () => {
    input.value = "";
    inputValue = "";
};
const createToDo = () => {
    if (!inputValue) return;
    const li = document.createElement("li");
    li.innerText = inputValue;
    ul.append(li);
};
button.addEventListener("click", () => {
    createToDo();
    resetInput();
});

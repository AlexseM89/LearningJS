h1 = document.createElement("h1");
h1.innerText = "To Do List";
documentContainer = document.querySelector(".container");
boxInput = document.createElement("input");
boxInput.placeholder = "New дело!";
documentContainer.append(this.h1);
divInputButton = document.createElement("div");
documentContainer.append(this.divInputButton);
button = document.createElement("button");
button.innerHTML = "add";
documentContainer.append(this.divInputButton);
divInputButton.append(this.boxInput);
divInputButton.append(this.button);
divList = document.createElement("div");
list = document.createElement("ul");
item1 = document.createElement("li");
item2 = document.createElement("li");
item3 = document.createElement("li");
btn1 = document.createElement("button");
btn1.innerHTML = "X";
btn2 = document.createElement("button");
btn2.innerHTML = "X";
btn3 = document.createElement("button");
btn3.innerHTML = "X";

documentContainer.append(divList);
divList.append(list);
list.append(item1);
item1.innerHTML = "What you name?";
list.append(item2);
item2.innerHTML = "How are you?";
list.append(this.item3);
item3.innerHTML = "How old you?";
item1.append(btn1);
item2.append(btn2);
item3.append(btn3);

footer = document.createElement("footer");
footer.innerText = "К сожалению через class не получилось реализовать!";
document.body.append(footer);

//css container
documentContainer.style.margin = "0 auto";
documentContainer.style.display = "flex";
documentContainer.style.justifyContent = "space-between";
documentContainer.style.alignItems = "center";
documentContainer.style.flexDirection = "column";
documentContainer.style.width = "1200px";
//css input
boxInput.style.width = "260px";
boxInput.style.height = "20px";

//css button
button.style.width = "50px";
button.style.height = "26px";
//css div
divInputButton.style.margin = "0 auto";
divInputButton.style.display = "flex";
divInputButton.style.justifyContent = "space-between";
divInputButton.style.gap = "10px";
//css ul
divList.style.margin = "0 auto";
divList.style.display = "flex";
divList.style.justifyContent = "space-between";
divList.style.width = "350px";
divList.style.height = "520px";

//css li
list.style.display = "flex";
list.style.justifyContent = "right";
list.style.flexDirection = "column";
//css footer
footer.style.margin = "0 auto";
footer.style.display = "flex";
footer.style.justifyContent = "space-between";
footer.style.alignItems = "center";
footer.style.flexDirection = "column";
footer.style.width = "1200px";

const handlerInput = () => {
    boxInput.value = " ";
    console.log("blur");
};

// boxInput.addEventListener("focus", () => console.log("focus"));
// boxInput.addEventListener("focus", (event) => console.log(event));
// boxInput.onfocus = () => console.log("focus");
boxInput.addEventListener("blur", handlerInput);

let inputValu = " ";
boxInput.addEventListener("input", (event) => {
    inputValu = event.target.value;
});

const createNewItems = () => {
    console.log("Вывод", boxInput.innerText);
    if (inputValu === " ") {
        return;
    } else {
        let item = document.createElement("li");
        console.log(boxInput.value);
        item.innerText = inputValu;
        console.log(item);
        let btn = document.createElement("button");
        btn.innerHTML = "X";
        console.log(btn);
        item.append(btn);
        list.append(item);
        console.log(item);
        inputValu = " ";
    }
};

button.addEventListener("click", () => {
    createNewItems();
});

document.addEventListener("click", function (e) {
    console.log(e.target.innerText);
    if (e.target.innerText === "X") {
        console.log(e.target.parentNode);
        e.target.parentNode.remove();
    }
});

// class ToDOList {
//     constructor() {
//         this.documentContainer = document.querySelector(".container");
//         this.createToDoList();
//     }
//     createToDoList() {
//         this.h1 = document.createElement("h1");
//         this.h1.innerText = "To Do List";
//         this.documentContainer = document.querySelector(".container");
//         this.boxInput = document.createElement("input");
//         this.documentContainer.append(this.h1);
//         // this.documentContainer.append(this.boxInput);
//         this.divInputButton = document.createElement("div");
//         this.documentContainer.append(this.divInputButton);
//         this.button = document.createElement("button");
//         this.button.innerHTML = "add";
//         this.documentContainer.append(this.divInputButton);
//         this.divInputButton.append(this.boxInput);
//         this.divInputButton.append(this.button);
//         this.divList = document.createElement("div");
//         this.list = document.createElement("ul");
//         this.item1 = document.createElement("li");
//         this.item2 = document.createElement("li");
//         this.item3 = document.createElement("li");
//         this.btn1 = document.createElement("button");
//         this.btn1.innerHTML = "X";
//         this.btn2 = document.createElement("button");
//         this.btn2.innerHTML = "X";
//         this.btn3 = document.createElement("button");
//         this.btn3.innerHTML = "X";

//         this.documentContainer.append(this.divList);
//         this.divList.append(this.list);
//         this.list.append(this.item1);
//         this.item1.innerHTML = "What you name?";
//         this.list.append(this.item2);
//         this.item2.innerHTML = "How are you?";
//         this.list.append(this.item3);
//         this.item3.innerHTML = "How old you?";
//         this.item1.append(this.btn1);
//         this.item2.append(this.btn2);
//         this.item3.append(this.btn3);

//         //css container
//         this.documentContainer.style.margin = "0 auto";
//         this.documentContainer.style.display = "flex";
//         this.documentContainer.style.justifyContent = "space-between";
//         this.documentContainer.style.alignItems = "center";
//         this.documentContainer.style.flexDirection = "column";
//         this.documentContainer.style.width = "1200px";
//         //css input
//         this.boxInput.style.width = "260px";
//         this.boxInput.style.height = "20px";
//         //css button
//         this.button.style.width = "50px";
//         this.button.style.height = "26px";
//         //css div
//         this.divInputButton.style.margin = "0 auto";
//         this.divInputButton.style.display = "flex";
//         this.divInputButton.style.justifyContent = "space-between";
//         this.divInputButton.style.gap = "10px";
//         //css ul
//         this.divList.style.margin = "0 auto";
//         this.divList.style.display = "flex";
//         this.divList.style.justifyContent = "space-between";
//         this.divList.style.width = "350px";
//         this.divList.style.height = "520px";

//         //css li
//         this.list.style.display = "flex";
//         this.list.style.justifyContent = "right";
//         this.list.style.flexDirection = "column";

//         this.boxInput.addEventListener("input", (event) => {
//             // this.inputValue = "";
//             this.inputValue = event.target.value;
//             console.log(this.inputValue);
//         });
//         // const resetInput = () => {
//         //     this.boxInput.value = "";
//         //     this.inputValue = "";
//         // };
//         // let inputValue = this.boxInput.value;

//         // const createNewItems = () => {
//         //     this.item = document.createElement("li");
//         //     console.log(this.boxInput.value);

//         //     this.item.innerText = this.boxInput.value;
//         //     console.log(this.item);
//         // };

//         this.button.addEventListener("click", () => {
//             // console.log(inputValue);
//             // createNewItems();
//             // this.resetInput();

//             this.itemX = document.createElement("li");
//             this.itemX.innerText = this.boxInput.value;
//             this.btnX = document.createElement("button");
//             // this.btnX.className
//             this.btnX.innerHTML = "X";
//             this.btnX.onclick = function () {
//                 console.log(this.btnX);
//                 console.log("asdasd");
//                 // this.btnX.parentNode.remove();
//             };
//             this.itemX.append(this.btnX);
//             this.list.append(this.itemX);
//             console.log(this.itemX);
//             if (this.boxInput.value) this.boxInput.value = " ";
//         });
//         // this.btnX.addEventListener("click", () => {
//         //     if (this.btnX.innerHTML === "X") this.btnX.remove();
//         // });
//         // this.btnX.addEventListener("click", (event) => {
//         //     let target = event.target;
//         //     console.log(target.parentNode);
//         //     if (this.btnX.innerHTML === "X") this.btnX.parentNode.remove();
//         // });
//         const handlerInput = () => {
//             this.boxInput.value = " ";
//             console.log("blur");
//         };

//         // this.boxInput.addEventListener("focus", () => console.log("focus"));
//         // this.boxInput.addEventListener("focus", (event) => console.log(event));
//         // this.boxInput.onfocus = () => console.log("focus");
//         // this.boxInput.addEventListener("blur", handlerInput);
//     }
// }
// const toDoList = new ToDOList();

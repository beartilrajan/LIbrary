
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}


const popup = document.getElementById("popup");
const opnbtn = document.querySelector(".add");
const cancel = document.querySelector(".Cancel");

opnbtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

cancel.addEventListener("click", () => {
  popup.style.display = "none";
});
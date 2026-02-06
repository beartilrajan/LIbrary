
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
const container = document.querySelector(".container")
const remove = document.querySelector(".remove")
const content = document.querySelector(".content")

opnbtn.addEventListener("click", () => {
  popup.style.display = "flex";
  container.style.filter = "blur(6px)"
});

cancel.addEventListener("click", () => {
  popup.style.display = "none";
  container.style.filter = "blur(0px)"
});

content.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const cardClicked = e.target.closest(".card");
    cardClicked.remove();
  }
})

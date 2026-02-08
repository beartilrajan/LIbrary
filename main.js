
const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead = false) {
  const newbook = new Book(title, author, pages, isRead)
  myLibrary.push(newbook);
  displaybook();
}

function displaybook() {
  
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


content.addEventListener("click", (e) => {
  if (e.target.classList.contains("changeStatus")) {
    const card = e.target.closest(".card");
    const button = e.target;
    if (button.textContent === "Mark Unread") {
      card.style.backgroundColor = "#909090";
      button.textContent = "Mark Read";
    }
    else if (button.textContent === "Mark Read") {
      card.style.backgroundColor = "#c9ff87";
      button.textContent = "Mark Unread";
    }
  }
})

const addBook = document.querySelector(".Add-Book")

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("Add-Book")) {
    const title = document.getElementById("Title").value;
    const author = document.getElementById("Author").value;
    const pages = document.getElementById("Pages").value;
    addBookToLibrary(title, author, pages);
  }
})


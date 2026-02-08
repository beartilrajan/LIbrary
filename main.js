const popup = document.getElementById("popup");
const opnbtn = document.querySelector(".add");
const cancel = document.querySelector(".Cancel");
const container = document.querySelector(".container");
const remove = document.querySelector(".remove");
const content = document.querySelector(".content");
const addBook = document.querySelector(".Add-Book");

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead = false) {
  const newBook = new Book(title, author, pages, isRead)
  myLibrary.push(newBook);
  displaybook();
}



function displaybook() {
  content.innerHTML = "";
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = book.id;
    if (book.isRead === true) {
      card.style.backgroundColor = "#c9ff87";
    }
    card.innerHTML = `<div class="title">${book.title}</div>
                <div class="subCard">
                    <div class="author">
                        <span id="authorLabel">Author:</span>
                        <span id="authorName">${book.author}</span>
                    </div>
                    <div class="pages">
                        <span id="pageLabel">Page: </span>
                        <span id="pageNumber">${book.pages}</span>
                    </div>
                </div>
                <div class="buttons">
                    <button class="changeStatus">${book.isRead ? "Mark Unread" : "Mark Read"}</button>
                    <button class="remove">Remove</button>
                </div>`

    content.append(card);
  });
}





opnbtn.addEventListener("click", () => {
  popup.style.display = "flex";
  container.style.filter = "blur(6px)"
});

cancel.addEventListener("click", () => {
  popup.style.display = "none";
  container.style.filter = "blur(0px)"
});

content.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  const id = card.dataset.id;
  const index = myLibrary.findIndex(book => book.id === id);

  if (e.target.classList.contains("remove")) {
    myLibrary.splice(index, 1);
    displaybook();
  }
  else if (e.target.classList.contains("changeStatus")) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    displaybook();
  }
}
);



popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("Add-Book")) {
    e.preventDefault();

    const title = document.getElementById("Title").value;
    const author = document.getElementById("Author").value;
    const pages = document.getElementById("Pages").value;
    addBookToLibrary(title, author, pages, false);
    popup.style.display = "none";
    container.style.filter = "blur(0px)";
    document.getElementById("Title").value = "";
    document.getElementById("Author").value = "";
    document.getElementById("Pages").value = "";

  }
})

addBookToLibrary("Atomic Habits", "James Clear", 320, false);
addBookToLibrary("Deep Work", "Cal Newport", 296, false);
const myLibrary = [];

//book constructor
function Book(Id, title, author, noOfPages) {
  // the constructor...
  this.Id = Id;
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
}

Book.prototype.hasRead = true;

const table = document.querySelector("#book-table");
function addBookToLibrary(title, author, numberOfPages) {
  // take params, create a book then store it in the array
  const Id = crypto.randomUUID();
  //create a new book from the parameters
  const book = {
    details: new Book(Id, title, author, numberOfPages),
  };

  console.log(book.details.title);
  const bookRow = document.createElement("tr");
  const bookId = document.createElement("td");
  const bookTitle = document.createElement("td");
  const bookAuthor = document.createElement("td");
  const bookPages = document.createElement("td");
  const deleteAction = document.createElement("td");
  const hasRead = document.createElement("td");
  bookRow.append(
    bookId,
    bookTitle,
    bookAuthor,
    bookPages,
    hasRead,
    deleteAction,
  );

  bookId.textContent = book.details.Id;
  bookTitle.textContent = book.details.title;
  bookAuthor.textContent = book.details.author;
  bookPages.textContent = book.details.noOfPages;

  const hasReadBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  hasReadBtn.textContent = "Read";
  hasRead.appendChild(hasReadBtn);
  deleteAction.appendChild(deleteBtn);
  table.appendChild(bookRow);

  //append the book item in the list
  myLibrary.push(book.details);

  deleteBtn.addEventListener("click", () => {
    table.removeChild(bookRow);
  });

  hasReadBtn.addEventListener("click", () => {
    book.details.hasRead = !book.details.hasRead;
    hasReadBtn.textContent = book.details.hasRead ? "Unread" : "Read";
  });

  console.log(myLibrary);
}

//function to display all  the books currently in the library on a table

const addBtn = document.querySelector("#add-book");
console.log(addBtn);

//adding a button for displaying  the form to add a new book
const form = document.querySelector("#myForm");
addBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

const submit_btn = document.querySelector("#submit-btn");
const clear_btn = document.querySelector("#clear-form");

//submiting the book details to the table
submit_btn.addEventListener("click", function (event) {
  event.preventDefault();

  //getting the values from the form
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#numberOfPages").value;
  const isReadBtn = document.querySelector("#isRead");
  addBookToLibrary(title, author, pages);
  console.log(title, author, pages);
});

clear_btn.addEventListener("click", function (event) {
  event.preventDefault();
  form.style.display = "none";
});

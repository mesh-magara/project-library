const myLibrary = [];

//book constructor
function Book(title, author, noOfPages) {
  // the constructor...
  this.Id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.hasRead = false;
}

Book.prototype.toggleRead = function () {
  this.hasRead = !this.hasRead;
};

//table where the books will be displayed
const table = document.querySelector("#book-table");

function addBookToLibrary(title, author, numberOfPages) {
  // take params, create a book then store it in the array
  //create a new book from the parameters
  const book = new Book(title, author, numberOfPages);
  myLibrary.push(book);

  console.log(myLibrary);
}

//function to display all  the books currently in the library on a table
const bookBody = document.querySelector("#bookBody");
function displayBooks() {
  bookBody.innerHTML = ""; // Clear the table before displaying the books
  createBookRow();
}

//create a bookRow function

function createBookRow(book) {
  myLibrary.forEach((book) => {
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

    bookId.textContent = book.Id;
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.noOfPages;

    const hasReadBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    hasReadBtn.textContent = "Read";
    hasRead.appendChild(hasReadBtn);
    deleteAction.appendChild(deleteBtn);
    bookBody.appendChild(bookRow);

    //delete button event listener to remove the book from the table and the library
    deleteBtn.addEventListener("click", () => {
      bookBody.removeChild(bookRow);
      const index = myLibrary.findIndex((b) => b.Id === book.Id);
      if (index !== -1) {
        myLibrary.splice(index, 1);
      }
    });

    hasReadBtn.addEventListener("click", () => {
      book.toggleRead();
      hasReadBtn.textContent = book.hasRead ? "Unread" : "Read";
    });
  });
}

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

//A form for submitting the book details to the table
submit_btn.addEventListener("click", function (event) {
  event.preventDefault();

  //getting the values from the form
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#numberOfPages").value;
  const isReadBtn = document.querySelector("#isRead");
  addBookToLibrary(title, author, pages);
  displayBooks();
  console.log(title, author, pages);
});

clear_btn.addEventListener("click", function (event) {
  event.preventDefault();
  form.style.display = "none";
});

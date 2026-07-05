const myLibrary = [];

function Book(Id, title, author, noOfPages) {
  // the constructor...
  this.Id = Id;
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
}

function addBookToLibrary(title, author, numberOfPages) {
  // take params, create a book then store it in the array
  const Id = crypto.randomUUID();

  //create a new book from the parameters
  book = {
    details: new Book(Id, title, author, numberOfPages),
  };

  //append the book item in the list
  myLibrary.push(book.details);
}

const table = document.querySelector("#book-table");
console.log(table);

//function to append the book on the table
function displayBook(library) {
  library.forEach((book) => {
    const Book = document.createElement("tr");
    const num = document.createElement("td");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");

    Book.append(num, title, author, pages);

    num.textContent = book.Id;
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.noOfPages;

    table.appendChild(Book);
  });
}

const addBtn = document.querySelector("#add-book");
console.log(addBtn);

addBookToLibrary("Vault is mine", "Paul George", 20);
displayBook(myLibrary);

addBookToLibrary("People are scared", "Paul john", 200);
addBookToLibrary("Vault is mine", "Paul George", 20);
addBtn.addEventListener("click", displayBook(myLibrary));

// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // create element
  const row = document.createElement('tr');
  // insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#' class='delete'>X</a></td>
  `
  list.appendChild(row);
}

UI.prototype.clearFields = function () {
  document.getElementById('title').value === '';
  document.getElementById('author').value === '';
  document.getElementById('isbn').value === '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value

  // instantiate book
  const book = new Book(title, author, isbn);

  // instantiate ui
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // clear fields
  ui.clearFields();

  e.preventDefault();
});
// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI contructor
function UI() { }

UI.prototype.addToList = function (book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a class='delete'>X</a></td>
  `
  list.appendChild(row);
}

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  // timeout after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();

  }, 3000);

}

document.addEventListener('submit', e => {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;


  const book = new Book(title, author, isbn);
  const ui = new UI();
  if (title !== '' && author !== '' && isbn !== '') {
    ui.addToList(book);
    ui.clearFields();
    ui.showAlert('Book Added!', 'success');
  } else {
    ui.showAlert('Please Fill in the fields', 'error');
  }

  e.preventDefault();

})
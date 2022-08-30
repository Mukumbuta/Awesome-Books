// Import modules
import Books from './modules/bookConstructor.js';
import { displayBooks, renderBooks } from './modules/handleUI.js';
import generateID from './modules/generateID.js';
import { addBookToLocalStorage, removeBookFromLocalStorage } from './modules/localStorage.js';
import getTime from './modules/luxontime.js';

// Display time using Luxon
const showTime = document.getElementById('show-time');
showTime.innerHTML = getTime();

// Render data on the page onload
displayBooks();

// Handle DOM events
// Display one particular section onclicking corresponding nav link
const menuItems = document.querySelectorAll('.menu-items');
const container = document.querySelectorAll('.container');

menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const linkID = e.target.className;

    container.forEach((section) => {
      section.classList.remove('active');

      if (section.id === linkID) {
        section.classList.add('active');
      }
    });
  });
});

// Event: Add book to UI onsubmit
const form = document.getElementById('add-book');
form.addEventListener('submit', (e) => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const bookID = generateID();

  // Validate form before creating book object
  const errorMsg = document.getElementById('error');
  if (title.length === 0 || author.length === 0) {
    e.preventDefault();
    errorMsg.textContent = 'All fields must be filled in!';
  }

  // Create book instance
  const bookToAdd = new Books(title, author, bookID);

  // Add book to local storage
  addBookToLocalStorage(bookToAdd);

  // Render book to UI
  renderBooks(bookToAdd);
});

// Event: Remove book from UI
const removeBookBtns = document.querySelectorAll('.delete-btn');
removeBookBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnData = e.target;
    const targetBookID = btnData.id;

    // Remove book from local storage
    removeBookFromLocalStorage(targetBookID);

    // Remove book from UI
    btn.parentElement.parentElement.remove();
  });
});

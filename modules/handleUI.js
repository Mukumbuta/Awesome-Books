
import {getLocalStorageBooks} from './localStorage.js';

export const displayBooks = () => {
    const books = getLocalStorageBooks();
    if(books !== null) {
        books.forEach((book) => renderBooks(book));
    }
}

export const renderBooks = (book) => {
    const booksContainer = document.querySelector('.book-details');
    booksContainer.innerHTML += `
                            <tr>
                                <td colspan="2">
                                    "${book.title}" by ${book.author}
                                </td>
                                <td>
                                    <button class="delete-btn" id="${book.id}">Remove</button>
                                </td>
                            </tr>`;
}

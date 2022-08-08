// Local Storage class

// Get book from local storage
export const getLocalStorageBooks = () => {
    let localBooks;
    if(localStorage.getItem('books') === null) {
        localBooks = [];
    } else {
        localBooks = JSON.parse(localStorage.getItem('books'));
    }

    return localBooks;
}

export const  addBookToLocalStorage = (books) => {
    const storedBooks = getLocalStorageBooks();
    storedBooks.push(books);
    localStorage.setItem('books', JSON.stringify(storedBooks));
}

export const removeBookFromLocalStorage = (bookID) => {
    const booksToFilter = getLocalStorageBooks();
    const filteredBooks = booksToFilter.filter((book) => book.id !== parseInt(bookID, 10));
    localStorage.setItem('books', JSON.stringify(filteredBooks));
}

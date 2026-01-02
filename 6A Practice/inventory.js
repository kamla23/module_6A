
export default function addbook(books, newbook){
    const {title, author, genre, quantity = 1} = newbook;
    books.push({title, author, genre, quantity});
}

export function filterBooksByGenre(books, genre){
    return books.filter(book => book.genre === genre);
}

export function getBookInfo(books, title){
    const book = books.find(book => book.title === title);
    return book || {error: "book not found"};
}



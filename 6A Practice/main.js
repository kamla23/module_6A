
import addbook from "./inventory.js";
import {filterBooksByGenre,getBookInfo } from "./inventory.js";

const books = [
    {title:"1984", author:"George Orwell", genre:"Dystopian", quantity:4},
    {title:"To kill a Mockingbird", author:"Harper Lee", genre:"Classic", quantity:2},
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald", genre:"Classic", quantity:5}
];

addbook(books, {title: "Brave New World", author:"Aldous Huxley", genre:"Dystopian"});
console.log(books);

const dystopianBooks = filterBooksByGenre(books, "Classic");
console.log(dystopianBooks); 

const bookInfo = getBookInfo(books, "1984");
console.log("book Information:", bookInfo);


const nonExistentBookInfo = getBookInfo(books, "Unknown title");
console.log("Non-existent Book Information:", nonExistentBookInfo); 

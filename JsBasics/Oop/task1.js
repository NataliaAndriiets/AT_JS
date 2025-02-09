
import Book from "./book.js";
import Ebook from "./ebook.js";


// Створення екземплярів Book
const book1 = new Book('Choice', 'Edit Eger', 2000);
const book2 = new Book('Seven sisters', 'Erika Mezza', 2021);
book1.printInfo();
book2.printInfo();

//// Створення екземпляра EBook
const ebook1 = new Ebook('Green light', 'Naomi Holds', 1960, 'PDF');
ebook1.printInfo();


//Getters & Setters
book1.name = "name1";
book1.author = "author1"
book1.publication = "author1"
book2.name = "name2";
book2.author = "hor2"
book2.publication = "author2"

// Використання статичних методів
const books = [book1, book2, ebook1];
console.log(Book.findOldestBook(books));

//// Створення EBook із Book
const example2 = new Ebook(book1.name, book1.author, book1.publication, "pdf");
example2.printInfo();
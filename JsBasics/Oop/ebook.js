
import Book from "./book.js";

class Ebook extends Book {
    constructor(name, author, publication, format) {
        super(name, author, publication);

        this._format = format;
    }
    get format() {
        return this._format;
    }

    set format(value) {
        if(typeof value !== "string") {
            console.log('The property format should be string');
            return;
        }
        this._format = value;
    }

    printInfo() {
        console.log(`The book ${ this.name }. Written by ${ this.author }. Publication in ${ this.publication } year. Format ${ this.format }.`)
    }
    static createFromBook(book, format) {
        return new Ebook(book.name, book.author, book.publication, format);
    }
}


export default Ebook; 



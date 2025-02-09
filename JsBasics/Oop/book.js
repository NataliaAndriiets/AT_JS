
class Book {
    constructor(name, author, publication) {
        this._name = name;
        this._author = author;
        this._publication = publication;
    }
    
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("name with length less then 4 is not possible.");
            return;
        }
        this._name = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        if (value.length < 7) {
            console.log("Author with length less then 7 is not possible.");
            return;
        }
        this._author = value;
    }
     get publication() {
        return this._publication;
    }
    set publication(value) {
        if (typeof value !== "number" || value < 2000) {
            console.log("Publication year should be a number later 2000.");
            return;
        }
        this._publication = value;
    }
    printInfo() {
    console.log(`The book ${this.name}. Written by ${this.author}. Publication in ${this.publication} year.`)
    }

    static findOldestBook(books) {
         return books.reduce((oldest, book) => (book.publication < oldest.publication ? book : oldest));
    }
    
}




export default Book;  


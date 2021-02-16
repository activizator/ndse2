"use strict";
var BooksRepository = /** @class */ (function () {
    function BooksRepository(id, title, description, authors, favorite, fileCover, fileName) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
    BooksRepository.prototype.createBook = function () {
        var book = { id: this.id, title: this.title, description: this.description, authors: this.authors, favorite: this.favorite, fileCover: this.fileCover, fileName: this.fileName };
        console.log("Создана книга: " + JSON.stringify(book));
        return book;
    };
    BooksRepository.prototype.getBook = function () {
        console.log("Информация о книге: " + JSON.stringify({ id: this.id }));
        return { id: this.id };
    };
    BooksRepository.prototype.getBooks = function () {
        console.log("Информация обо всех книгах");
    };
    BooksRepository.prototype.updateBook = function () {
        console.log("Обновлена информация о книге: " + JSON.stringify({ id: this.id }));
        return { id: this.id };
    };
    BooksRepository.prototype.deleteBook = function () {
        console.log("Удалена книга: " + JSON.stringify({ id: this.id }));
        return { id: this.id };
    };
    return BooksRepository;
}());
var book = new BooksRepository("1", "title", "description", "authors", "favorite", "fileCover", "fileName");
book.createBook();
var book2 = new BooksRepository("2");
book2.deleteBook();

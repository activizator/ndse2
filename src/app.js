"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Books = /** @class */ (function () {
    function Books(id, title, description, authors, favorite, fileCover, fileName) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.book = { id: id, title: title, description: description, authors: authors, favorite: favorite, fileCover: fileCover, fileName: fileName };
    }
    return Books;
}());
var BooksRepository = /** @class */ (function (_super) {
    __extends(BooksRepository, _super);
    function BooksRepository(id, title, description, authors, favorite, fileCover, fileName) {
        return _super.call(this, id, title, description, authors, favorite, fileCover, fileName) || this;
    }
    BooksRepository.prototype.createBook = function () {
        console.log("Создана книга: " + JSON.stringify(this.book));
    };
    BooksRepository.prototype.getBook = function () {
        console.log("Информация о книге:" + this.id);
    };
    BooksRepository.prototype.getBooks = function () {
        console.log("Информация обо всех книгах");
    };
    BooksRepository.prototype.updateBook = function () {
        console.log("Обновлена информация о книге:" + this.id);
    };
    BooksRepository.prototype.deleteBook = function () {
        console.log("Удалена книга:" + this.id);
    };
    return BooksRepository;
}(Books));
var book = new BooksRepository("1", "title", "description", "authors", "favorite", "fileCover", "fileName");
book.createBook();
var book2 = new BooksRepository("2");
book2.deleteBook();

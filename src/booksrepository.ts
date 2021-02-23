import {IBook} from './interfaces';
// import * as BookSchema from './../models/bookschema';
import "reflect-metadata";
import { injectable } from "inversify";

@injectable()
export class BooksRepository implements IBook {
    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;

    constructor(id: string = "", title?: string, description?: string, authors?: string, favorite?: string, fileCover?: string, fileName?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }

    getBooks(): IBook[] {
        // const books = await BookSchema.find().select('-__v');
        // return books;
        return [{id: "123"},{id: "765"}];
    }

    // createBook(): IBook {
    //     const book = {id: this.id, title: this.title, description: this.description, authors: this.authors, favorite: this.favorite, fileCover: this.fileCover, fileName: this.fileName}
    //     return book;
    // }
    
    // getBook(): IBook {
    //     return {id: this.id};
    // }

    // updateBook(): IBook {
    //     return {id: this.id};
    // }
    
    // deleteBook(): IBook {
    //     return {id: this.id};
    // }
}

// const books = new BooksRepository();
// console.log(books.getBooks());
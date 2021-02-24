import "reflect-metadata";
import { injectable } from "inversify";

export interface IBook {
    _id?: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
}

@injectable()
export abstract class IBooksRepository implements IBook {
    _id?: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;

    constructor(
        _id: string = "",
        title: string,
        description: string,
        authors: string,
        favorite: string,
        fileCover: string,
        fileName: string
    ) {        
        this._id = _id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
    
    abstract getBooks(): Promise<IBook[] | null>;
    abstract createBook(_id: string, _title?: string, _description?: string, _authors?: string, _favorite?: string, _fileCover?: string, _fileName?: string): Promise<IBook | null>;    
    abstract getBook(_id: string): Promise<IBook | null>;
    abstract updateBook(_id: string, _title?: string, _description?: string, _authors?: string, _favorite?: string, _fileCover?: string, _fileName?: string): Promise<IBook | null>;    
    abstract deleteBook(_id: string): Promise<IBook | null>;
}

// [
//     {
//       "description": "Книга про супергероев",
//       "authors": "Супергерои",
//       "favorite": "yes",
//       "fileCover": "http://placehold.it/200x300",
//       "fileName": "superbook.txt",
//       "_id": "60327f1d07cc172f7022bcc9",
//       "title": "Суперкнига 7"
//     },
//     {
//       "description": "Книга про супергероев11",
//       "authors": "Супергерои",
//       "favorite": "yes",
//       "fileCover": "http://placehold.it/200x300",
//       "fileName": "superbook.txt",
//       "_id": "60327f2507cc172f7022bcca",
//       "title": "Суперкнига 71"
//     }
//   ]
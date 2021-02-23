import "reflect-metadata";
import { injectable } from "inversify";

export interface IBook {
    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
}

@injectable()
export abstract class IBooksRepository implements IBook {
    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;

    constructor(
        id: string = "",
        title?: string,
        description?: string,
        authors?: string,
        favorite?: string,
        fileCover?: string,
        fileName?: string
    ) {        
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
    
    abstract getBooks(): IBook[];
    abstract createBook(_id: string, _title?: string, _description?: string, _authors?: string, _favorite?: string, _fileCover?: string, _fileName?: string): IBook;    
    abstract getBook(_id: string): IBook;
    abstract updateBook(_id: string, _title?: string, _description?: string, _authors?: string, _favorite?: string, _fileCover?: string, _fileName?: string): IBook;    
    abstract deleteBook(_id: string): IBook;
}


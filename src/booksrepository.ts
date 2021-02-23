import { BookSchema } from './models/bookschema';

import "reflect-metadata";
import { injectable } from "inversify";

import {IBook} from './interfaces';

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
        return [{id: "123"},{id: "765"}];
    }

    createBook(_id: string, _title?: string, _description?: string, _authors?: string, _favorite?: string, _fileCover?: string, _fileName?: string): IBook {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.authors = _authors;
        this.favorite = _favorite;
        this.fileCover = _fileCover;
        this.fileName = _fileName;
        const book = {id: this.id, title: this.title, description: this.description, authors: this.authors, favorite: this.favorite, fileCover: this.fileCover, fileName: this.fileName}
        return book;
    }
    
    getBook(_id: string): IBook {
        this.id = _id;
        return {id: this.id};
    }

    updateBook(_id: string, _title?: string, _description?: string, _authors?: string, _favorite?: string, _fileCover?: string, _fileName?: string): IBook {
        this.id = _id;
        this.title = _title;
        this.description = _description;
        this.authors = _authors;
        this.favorite = _favorite;
        this.fileCover = _fileCover;
        this.fileName = _fileName;

        return {id: this.id};
    }
    
    deleteBook(_id: string): IBook {
        this.id = _id;
        return {id: this.id};
    }
}


// router.get('/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const book = await BookSchema.findById(id).select('-__v');
//         if (!book) { throw new Error('not found'); };

//             res.json({ ...book });

//     } catch (error) {
//         console.error(error);
//         res.status(404).json('book | not found');
//     };
// });

// router.post('/book/', formParser.single('body'), async (req, res) => {
//     const { title, description, authors, favorite, fileCover, fileName } = req.body;

//     const newBook = new BookSchema({ title, description, authors, favorite, fileCover, fileName });
//     try {
//         await newBook.save();
//         res.json(newBook);
//     } catch (e) {
//         console.error(e);
//         res.status(500).json();
//     }
// });

// router.put('/:id', formParser.single('body'), async (req, res) => {
//     const { title, description, authors, favorite, fileCover, fileName } = req.body;
//     const { id } = req.params;

//     try {
//         const updBook = await BookSchema.findByIdAndUpdate(id, { title, description, authors, favorite, fileCover, fileName }, { new: true });
//         res.json(updBook);
//     } catch (e) {
//         console.error(e);
//         res.status(500).json();
//     }
// });

// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;

//     try {
//         await BookSchema.deleteOne({ _id: id });
//         res.json(true);
//     } catch (e) {
//         console.error(e);
//         res.status(500).json();
//     }
// });

// router.post('/:id/upload-book', fileMiddleware.single('book-file'), (req, res) => {
//     if (req.file) {
//         const { path } = req.file;
//         res.json(path);
//     } else {
//         res.json(null);
//     }
// });

// router.get('/:id/download-book', (req, res) => {
//     const { id } = req.params;
//     res.download(path.join('./books', `${id}.txt`), `${id}.txt`, err => {
//         if (err) {
//             res.status(404).json();
//         }
//     });
// });
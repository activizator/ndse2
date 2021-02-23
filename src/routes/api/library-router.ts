import express from 'express';
const router = express.Router();
import path from 'path';
import { BookSchema } from '../../models/bookschema';
import { fileMiddleware } from '../../middleware/uploader';
import multer from 'multer';
const formParser = multer();

import { container } from '../../container';
import { BooksRepository } from '../../booksrepository';

router.get('/books/', (req, res) => {
    const repo = container.get(BooksRepository);
    const books = repo.getBooks();
    res.json(books);
});



router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const book = await BookSchema.findById(id).select('-__v');
        if (!book) { throw new Error('not found'); };

            res.json({ ...book });

    } catch (error) {
        console.error(error);
        res.status(404).json('book | not found');
    };
});

router.post('/book/', formParser.single('body'), async (req, res) => {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;

    const newBook = new BookSchema({ title, description, authors, favorite, fileCover, fileName });
    try {
        await newBook.save();
        res.json(newBook);
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.put('/:id', formParser.single('body'), async (req, res) => {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const { id } = req.params;

    try {
        const updBook = await BookSchema.findByIdAndUpdate(id, { title, description, authors, favorite, fileCover, fileName }, { new: true });
        res.json(updBook);
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await BookSchema.deleteOne({ _id: id });
        res.json(true);
    } catch (e) {
        console.error(e);
        res.status(500).json();
    }
});

router.post('/:id/upload-book', fileMiddleware.single('book-file'), (req, res) => {
    if (req.file) {
        const { path } = req.file;
        res.json(path);
    } else {
        res.json(null);
    }
});

router.get('/:id/download-book', (req, res) => {
    const { id } = req.params;
    res.download(path.join('./books', `${id}.txt`), `${id}.txt`, err => {
        if (err) {
            res.status(404).json();
        }
    });
});

module.exports = router;

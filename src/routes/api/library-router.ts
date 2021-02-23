import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
const formParser = multer();

import { container } from '../../container';
import { IBooksRepository } from '../../interfaces';

const repo = container.get(IBooksRepository);

router.get('/books/', async (req, res) => {
    const books = await repo.getBooks();
    res.json(books);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const book = repo.getBook(id);
    res.json(book);
});

router.post('/book/', formParser.single('body'), async (req, res) => {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const id = uuidv4();
    const book = repo.createBook(id, title, description, authors, favorite, fileCover, fileName);
    res.json(book);
});

router.put('/:id', formParser.single('body'), async (req, res) => {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const { id } = req.params;
    const book = repo.updateBook(id, title, description, authors, favorite, fileCover, fileName);
    res.json(book);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const book = repo.deleteBook(id);
    res.json(book);
});

export { router as libApiRouter };

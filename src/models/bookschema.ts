import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, default: ''
    },
    authors: {
        type: String, default: ''
    },
    favorite: {
        type: String, default: ''
    },
    fileCover: {
        type: String, default: 'http://placehold.it/200x300'
    },
    fileName: {
        type: String, default: ''
    }
});

export const BookSchema = model('Books', bookSchema);

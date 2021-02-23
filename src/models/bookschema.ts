import mongoose, { Schema, Document } from 'mongoose';

interface IBookSchema extends Document {
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
  }

const bookSchema: Schema = new Schema({
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

export const BookSchema = mongoose.model<IBookSchema>('Books', bookSchema);

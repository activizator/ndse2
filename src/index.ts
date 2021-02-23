#!/usr/bin/env node

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from'body-parser';
import path from 'path';
import cors from 'cors';
import mongoose from'mongoose';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const mongoUrl = `mongodb+srv://${process.env.MDBUSER}:${process.env.MDBPASS}@cluster0.0isj7.azure.mongodb.net/MyLibDB?retryWrites=true&w=majority`;

const errorMiddleware = require('./middleware/error');

const libApiRouter = require('./routes/api/library-router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books', express.static(path.join(__dirname, 'books')));

app.use('/api/', libApiRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

async function start () {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true });

        app.listen(PORT, () => {
            console.log(`== Server is running on port ${PORT} ==`);
        });
        
    } catch (e) {
        console.log(e);
    }
}

start();

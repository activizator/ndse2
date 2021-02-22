"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
const booksrepository_1 = require("./booksrepository");
const container = new inversify_1.Container();
exports.container = container;
container.bind(booksrepository_1.BooksRepository).toSelf();

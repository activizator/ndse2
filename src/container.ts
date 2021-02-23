import "reflect-metadata";
import { Container } from "inversify";

import { IBooksRepository } from "./interfaces";
import { BooksRepository } from "./booksrepository";

const container = new Container();

container.bind(IBooksRepository).to(BooksRepository).inSingletonScope;

export { container };
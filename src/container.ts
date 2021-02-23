import "reflect-metadata";
import { Container } from "inversify";

import { BooksRepository } from "./booksrepository";

const container = new Container();

container.bind(BooksRepository).toSelf().inSingletonScope;

export { container };
interface IBookId {
    id: string;
}

interface IBook extends IBookId {
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
}

class BooksRepository implements IBook {

    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;

    constructor(id: string, title?: string, description?: string, authors?: string, favorite?: string, fileCover?: string, fileName?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
    }
    
    createBook(): IBook {
        const book = {id: this.id, title: this.title, description: this.description, authors: this.authors, favorite: this.favorite, fileCover: this.fileCover, fileName: this.fileName}
        console.log("Создана книга: " + JSON.stringify(book));
        return book;
    }
    
    getBook(): IBookId {
        console.log("Информация о книге: " + JSON.stringify({id: this.id}));
        return {id: this.id};
    }
    
    getBooks(): void {
        console.log("Информация обо всех книгах");
    }
    
    updateBook(): IBookId {
        console.log("Обновлена информация о книге: " + JSON.stringify({id: this.id}));
        return {id: this.id};
    }
    
    deleteBook(): IBookId {
        console.log("Удалена книга: " + JSON.stringify({id: this.id}));
        return {id: this.id};
    }
}

const book: BooksRepository = new BooksRepository("1", "title", "description", "authors", "favorite", "fileCover", "fileName");
book.createBook();

const book2: BooksRepository = new BooksRepository("2");
book2.deleteBook();

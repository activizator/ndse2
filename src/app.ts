interface Book {
    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
}

abstract class Books implements Book {
    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
    book?: {id: string, title: string, description: string, authors: string, favorite: string, fileCover: string, fileName: string};

    constructor(id: string, title?: string, description?: string, authors?: string, favorite?: string, fileCover?: string, fileName?: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.book = {id, title, description, authors, favorite, fileCover, fileName};
    }
}

class BooksRepository extends Books {

    id: string;
    title?: string;
    description?: string;
    authors?: string;
    favorite?: string;
    fileCover?: string;
    fileName?: string;
    book?: {id: string, title: string, description: string, authors: string, favorite: string, fileCover: string, fileName: string};

    constructor(id: string, title?: string, description?: string, authors?: string, favorite?: string, fileCover?: string, fileName?: string) {
        super(id, title, description, authors, favorite, fileCover, fileName);
    }
    
    createBook(): void {
        console.log("Создана книга: " + JSON.stringify(this.book));
    }
    
    getBook(): void {
        console.log("Информация о книге:" + this.id);
    }
    
    getBooks(): void {
        console.log("Информация обо всех книгах");
    }
    
    updateBook(): void {
        console.log("Обновлена информация о книге:" + this.id);
    }
    
    deleteBook(): void {
        console.log("Удалена книга:" + this.id);
    }
}

const book: BooksRepository = new BooksRepository("1", "title", "description", "authors", "favorite", "fileCover", "fileName");
book.createBook();

const book2: BooksRepository = new BooksRepository("2");
book2.deleteBook();

# ndse2

Подготовьте рабочую среду для дальнейшей работы
1. Установите inversify к разрабатываемому приложению "библиотека" из модуля NDSE "Настройка окружения и Express.js" и создайте IoC-контейнер в файле container.js.


ГОТОВО! https://github.com/activizator/ndse2/blob/main/ts/container.ts

2. Добавьте сервис BooksRepository из предыдущего задания в IoC-контейнер.
    Как должно выглядеть добавление:
    Сервис должен подключиться .toSelf() без использования дополнительного контракта

```typescript
container.bind(BooksRepository).toSelf()
```


ГОТОВО! https://github.com/activizator/ndse2/blob/main/ts/booksrepository.ts

3. Воспользуйтесь IoC-контейнером в обработчиках запросов express.js, чтобы получить BooksRepository.
    Как должно выглядеть использование:

```typescript
router.get(':id', async (req, res, next) => {
   const repo = container.get(BooksRepository);
   const book = await repo.getBook(req.params.id);
   res.json(book);
})
```

  В примере для простоты опущены преобразования типов и обработка ошибок.

  В примере для простоты опущены преобразования типов и обработка ошибок.

ГОТОВО! https://github.com/activizator/ndse2/blob/main/routes/api/library-router.js

Сделал получение книг в одном методе АПИ через контейнер:

```javascript
const { container } = require('../../ts/container');
const { BooksRepository } = require('../../ts/booksrepository');

router.get('/books/', (req, res) => {
    // const books = await BookSchema.find().select('-__v'); убрал старый метод

    const repo = container.get(BooksRepository);
    const books = repo.getBooks();
    res.json(books);

});
```


# ndse2

1. Напишите интерфейс к сущности "книга" к разрабатываемому приложению "библиотека" из модуля NDSE "Настройка окружения и Express.js".

interface Book {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
}

2. Включите строгий режим "strict" в опциях компилятора, а параметр strictNullChecks выключите.
https://github.com/activizator/ndse2/blob/main/tsconfig.json

3. Напишите class "BooksRepository" к разрабатываемому приложению "библиотека" первого модуля.
https://github.com/activizator/ndse2/blob/main/src/app.ts

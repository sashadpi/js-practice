export class Book {
    constructor(bookTitle, author, date) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.date = date;
    }

    get bookTitle() {
        return this._bookTitle
    }

    set bookTitle(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название книги не должно быть пустым')
        }
        this._bookTitle = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Поле автор не должно быть пустым');
        }
        this._author = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        if (typeof value !== 'number' || value < 0 || value > new Date().getFullYear()) {
            throw new Error('Год издания должен быть корректным числом');
        }
        this._date = value;
    }

    printInfo() {
        console.log(`Название: ${this.bookTitle}, Автор: ${this.author}, Год выхода: ${this.date}`);
    }

    static getOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('Нужно передать непустой массив книг');
        }

        return books.reduce((oldest, current) => {
            if (!(current instanceof Book)) {
                throw new Error('В массиве должны быть только экземпляры Book или EBook');
            }

            return current.date < oldest.date ? current : oldest;
        });
    }
}


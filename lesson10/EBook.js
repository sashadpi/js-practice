import { Book } from './Book.js';

export class EBook extends Book {
	constructor(bookTitle, author, date, fileFormat) {
		super(bookTitle, author, date);
		this.fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		const allowedFormats = ['pdf', 'txt', 'epub'];

		if (!allowedFormats.includes(value)) {
			throw new Error(
				`Формат файла должен быть одним из: ${allowedFormats.join(', ')}`,
			);
		}
		this._fileFormat = value;
	}

	printInfo() {
		console.log(
			`Название: ${this.bookTitle}, Автор: ${this.author}, Год выхода: ${this.date}, Формат файла: ${this.fileFormat}`,
		);
	}

	static fromBook(book, fileFormat) {
		if (!(book instanceof Book)) {
			throw new Error('Нужно передать экземпляр класса Book');
		}

		if (typeof fileFormat !== 'string' || fileFormat.trim() === '') {
			throw new Error('Формат файла не должен быть пустым');
		}

		return new EBook(book.bookTitle, book.author, book.date, fileFormat);
	}
}

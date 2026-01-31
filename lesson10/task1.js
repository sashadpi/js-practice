import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('1984', 'Джордж Оруэлл', 1949);
const book2 = new Book('Сияние', 'Стивен Кинг', 1977);
const book3 = new Book('Властелин колец', 'Джон Толкин', 1954);

const eBook1 = new EBook('Унесённые ветром', 'Маргарет Митчелл', 1936, 'pdf');
const eBook2 = new EBook('Алиса в Стране чудес', 'Льюис Кэрролл', 1865, 'txt');
const eBook3 = new EBook('Граф Монте-Кристо', 'Александр Дюма', 1844, 'epub');

const books = [book1, book2, book3, eBook1, eBook2, eBook3];
const oldestBook = Book.getOldestBook(books);
const ebookFromBook = EBook.fromBook(book3, 'epub');
ebookFromBook.printInfo();
console.log('\n');

book1.printInfo();
book2.printInfo();
book3.printInfo();
console.log('\n');

eBook1.printInfo();
eBook2.printInfo();
eBook3.printInfo();
console.log('\n');

console.log('Найдавніша книга:');
oldestBook.printInfo();

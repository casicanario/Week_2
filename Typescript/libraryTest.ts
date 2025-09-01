//importar la clase en otro fichero denominado bookTest.ts.
import { Book } from './book';

//crear un objeto de la clase Book y probar todos sus atributos y métodos.
const book1 = new Book('Introducción a Javascript', 233, '2344433-BC23333', 'Joseph Smith', 'Now Editions');
const book2 = new Book('Aprendiendo TypeScript', 300, '9876543-TS98765', 'Jane Doe', 'Tech Books');
const book3 = new Book('JavaScript Avanzado', 400, '1234567-JS12345', 'Joseph Smith', 'Code Masters');
console.log(book1.toString());
book1.setNPages(250);
console.log(`Updated Number of Pages: ${book1.getNPages()}`);
console.log(book2.toString());
console.log(book3.toString());
//Guardar el fichero como bookTest.ts

//importar la clase en otro fichero denominado bookTest.ts.
import { Book } from './book';

//crear un objeto de la clase Book y probar todos sus atributos y métodos.
const book1 = new Book('Introducción a Javascript', 233, '2344433-BC23333', 'Joseph SVGAnimatedLength', 'Now Editions');
console.log(book1.toString());
book1.setNPages(250);
console.log(`Updated Number of Pages: ${book1.getNPages()}`);
//Guardar el fichero como bookTest.ts


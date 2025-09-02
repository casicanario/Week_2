//crear la clase Library con la siguiente estructura:
//atributos privados:
//books: array de Book
//address: string
//manager: string
//constructor para todos los atributos
//métodos públicos:
//getters y setters para los atributos address y manager.
//toString():string. Retorna toda la información de todos los libros de la biblioteca con la siguiente estructurar:
//"Book1: Title - Introducción a Javascript
//Number of Pages - 233
//ISBN - 2344433-BC23333
// Author - Joseph Smith
//Editorial - Now Editions..."
class Library {
    private books: Book[];
    private address: string;
    private manager: string;
    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }  
    public getAddress(): string {
        return this.address;
    }
    public setAddress(address: string): void {
        this.address = address;
    } 
    public getManager(): string {
        return this.manager;
    } 
    public setManager(manager: string): void {
        this.manager = manager;
    }
    public toString(): string {
        return this.books.map((book, index) => `Book${index + 1}: Title - ${book.getTitle()}
Number of Pages - ${book.getNPages()}
ISBN - ${book.getIsbn()}
Author - ${book.getAuthor()}
Editorial - ${book.getEditorial()}`).join('\n');
    }
    //getNumberOfBooks():number. Retorna el número de libros de la biblioteca.
//findByAuthor(author:string):Book[]. Retorna un array con los libros del autor pasado como parámetro.
    public getNumberOfBooks(): number {
        return this.books.length;
    }
    public findByAuthor(author: string): Book[] {
        return this.books.filter(book => book.getAuthor() === author);
    }

}


//Guardar la clase en un archivo library.ts
//modificar el fichero para exportar la clase.
import { Book } from './book';
export { Library };
//importar la clase en otro fichero denominado libraryTest.ts.



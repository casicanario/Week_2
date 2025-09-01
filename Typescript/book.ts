//crear la claseBook con la siguiente estructura:
//atributos privados: 
//title:string
//nPages:number
//isbn:string
//author:string
//editorial:string
//constructor para todos los atributos
//metodos publicos:
//getters y setters para todos los atributos
//toString():string. Retorna toda la información del libro con la siguiente estructura:
// "Title - Introducción a Javascript
//Number of Pages - 233
//ISBN - 2344433-BC23333
//Author - Joseph SVGAnimatedLengthEditorial - Now Editions"

class Book {
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string; 
    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;  
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    public getTitle(): string {
        return this.title;
    }
    public setTitle(title: string): void {
        this.title = title;
    }
    public getNPages(): number {
        return this.nPages;
    }
    public setNPages(nPages: number): void {
        this.nPages = nPages;
    }
    public getIsbn(): string {
        return this.isbn;
    }
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }
    public getAuthor(): string {
        return this.author;
    }
    public setAuthor(author: string): void {
        this.author = author;
    }
    public getEditorial(): string {
        return this.editorial;
    }
    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }
    public toString(): string {
        return `Title - ${this.title}\nNumber of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}`;
    }
}
//Guardar la clase Book en un archivo book.ts
//Modificar ese fichero para exportar la clase.
export { Book };
//importar la clase en otro fichero denominado bookTest.ts.
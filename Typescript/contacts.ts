//Crear un fichero llamado contacts.ts
//importar la clase Person
import { Person } from './person';
//crear la clase contacts con la siguiente estructura:
//atributo Público:
//people:array de objetos Person
//constructor sin parámetros que inicialice el array people.
//Métodos públicos:
//printCalendar(). Imprime por consola los datos de todas las personas de la agenda.
//Probar la clase contacts en un fichero llamado contactsTest.ts
export class Contacts {
    public people: Person[];
    constructor() {
        this.people = [];
    }  
    public printCalendar(): void {
        this.people.forEach(person => {
            console.log(`Name: ${person.name}, Age: ${person.age}, Address: ${person.getAddress()}`);
        });
    }
}


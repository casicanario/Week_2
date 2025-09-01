// contacts.js

import { Person } from './Person.js';

class Contacts {
    constructor() {
        this.persons = []; // Array de objetos Person
    }

    addPerson(person) {
        this.persons.push(person);
    }

    printPersons() {
        this.persons.forEach((person, index) => {
            console.log(`--- Person ${index + 1} ---`);
            person.printAll();
        });
    }
}

// Exportar la clase
export { Contacts };

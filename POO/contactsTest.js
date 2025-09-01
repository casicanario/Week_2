// contactsTest.js

import { Person } from './person.js';
import { Contacts } from './contacts.js';

// Crear objeto Contacts
const myContacts = new Contacts();

// Crear personas
const person1 = new Person("Fran", "Marquez", 75, 1.78, 1985, ["fútbol", "leer"]);
const person2 = new Person("Ana", "Gomez", 60, 1.65, 1990, ["pintura", "correr"]);

// Añadir personas al objeto Contacts
myContacts.addPerson(person1);
myContacts.addPerson(person2);

// Probar el método printPersons
myContacts.printPersons();

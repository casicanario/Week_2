//Probar la clase contacts en un fichero llamado contactsTest.ts
import { Contacts } from './contacts';
import { Person } from './person';

const contacts = new Contacts();
const person1 = new Person('Alice', 30, '123 Main St');
const person2 = new Person('Bob', 25, '456 Elm St');
contacts.people.push(person1, person2);
contacts.printCalendar();
//Guardar el fichero como contactsTest.ts






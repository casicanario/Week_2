//importar la clase en otro fichero denominado personTest.ts. 
import { Person } from './person';
//crear un objeto de la clase Person y probar todos sus atributos y métodos.
const person1 = new Person('Alice', 30, '123 Main St');
person1.printName();
console.log(`Year of Birth: ${person1.yearOfBirth(2024)}`);
console.log(`Address: ${person1.getAddress()}`);
person1.setAddress('456 Elm St');
console.log(`New Address: ${person1.getAddress()}`);
//Guardar el fichero como personTest.ts

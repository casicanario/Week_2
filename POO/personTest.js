// personTest.js

import { Person } from './Person.js';

// Crear objeto de la clase Person
const person1 = new Person("Fran", "Marquez", 75, 1.78, 1985, ["fútbol", "leer", "viajar"]);

// Probar todos los métodos
console.log("IMC:", person1.calculateIMC());
console.log("Edad en 2025:", person1.edad(2025));
person1.printAll();
person1.printHobbies();

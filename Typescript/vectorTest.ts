// Importar la clase Vector en otro fichero denominado vectorTest.ts.
import { Vector } from './vector';
// Crear un objeto de la clase Vector y probar todos sus atributos y métodos.
const vector1 = new Vector(5, 10);
const vector2 = new Vector(5, 10);
console.log('Vector 1:');
vector1.print();
console.log('Vector 2:');
vector2.print();
const addedVector = vector1.add(vector2);
console.log('Added Vector:');
addedVector.print();
const subbedVector = vector1.subs(vector2);
console.log('Subtracted Vector:');
subbedVector.print();
const multVector = vector1.mult(vector2);
console.log('Multiplied Vector:');
multVector.print();
const multNumberVector = vector1.multNumber(2);
console.log('Vector 1 Multiplied by 2:');
multNumberVector.print();
// Guardar el fichero como vectorTest.ts

// Crear una clase Vector con la siguiente estructura:
// Atributos privados:
//elements: array of numbers.
//constructor debe contener los siguientes parametros
//n:number. longitud del vector
//k:nuber. Maximo valor de los elementos del vector
//Este constructor tiene que crear el atributo elements formado por n numeros aleatorios entre 0 y k.
//Metodos Publicos:
//print(). Imprime por consola el vector.
//add(v1:Vector):Vector. Realiza la suma de elements con v1.
//subs(v1:Vector):Vector. Realiza la resta de elements con v1.
//mult(v1:Vector):Vector. Realiza la multiplicacion de elements con v1.
//multNUmber(n.number):Vector. Realiza la multiplicacion de elements con el numero n.
class Vector {
    private elements: number[];
    constructor(n: number, k: number) {
        this.elements = Array.from({ length: n }, () => Math.floor(Math.random() * (k + 1)));
    }
    public print(): void {
        console.log(this.elements);
    }
    public add(v1: Vector): Vector {
        if (this.elements.length !== v1.elements.length) {
            throw new Error('Vectors must be of the same length');
        }
        const result = this.elements.map((el, i) => el + v1.elements[i]);
        const newVector = new Vector(0, 0);
        newVector.elements = result;
        return newVector;
    }
    public subs(v1: Vector): Vector {
        if (this.elements.length !== v1.elements.length) {
            throw new Error('Vectors must be of the same length');
        }
        const result = this.elements.map((el, i) => el - v1.elements[i]);
        const newVector = new Vector(0, 0);
        newVector.elements = result;
        return newVector;
    }
    public mult(v1: Vector): Vector {
        if (this.elements.length !== v1.elements.length) {
            throw new Error('Vectors must be of the same length');
        }
        const result = this.elements.map((el, i) => el * v1.elements[i]);
        const newVector = new Vector(0, 0);
        newVector.elements = result;
        return newVector;
    }
    public multNumber(n: number): Vector {
        const result = this.elements.map(el => el * n);
        const newVector = new Vector(0, 0);
        newVector.elements = result;
        return newVector;
    }
}
//Guardar la clase en un archivo vector.ts
//Modificar el fichero para exportar la clase.
export { Vector };
//importar la clase en otro fichero denominado vectorTest.ts.

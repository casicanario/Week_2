//crear la clase person con la siguiente estructura:
//name:string
//age:number

//atributos privados
//adress:string
//Constructor para todos los atributos
//Métodos Públicos:
 //printName().Imprime el nombre de la persona
 //yearOfBirth(currentYear:number):number Retorna el año de nacimiento de la persona
// setadress(newAdress:string). Modifica el atributo address con el valor pasado como parametro.
//getAdress():string. Devuelve el valor del atributo address.


class Person {
    public name: string;
    public age: number;
    private address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    public printName(): void {
        console.log(this.name);
    }
    public yearOfBirth(currentYear: number): number {
        return currentYear - this.age;
    }
    public setAddress(newAddress: string): void {
        this.address = newAddress;
    }
    public getAddress(): string {
        return this.address;
    }
}

//Reto 2: Probar la Clase Person
//Guardar la clase Person en un archivo person.ts
//Modificar ese fichero para exportar la clase.

export { Person };







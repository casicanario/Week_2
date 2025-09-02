// person.js

class Person {
    constructor(name, surname, weight, height, yearOfBirth, hobbies = []) {
        this.name = name;
        this.surname = surname;
        this.weight = weight;       // en kg
        this.height = height;       // en metros
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;     // array de strings
    }

    // Método para calcular IMC
    calculateIMC() {
        if(this.height > 0){
            return (this.weight / (this.height ** 2)).toFixed(2);
        } else {
            return "Altura inválida";
        }
    }

    // Método para calcular la edad
    edad(currentYear) {
        return currentYear - this.yearOfBirth;
    }

    // Método para imprimir todos los atributos
    printAll() {
        console.log(`name - ${this.name}`);
        console.log(`surname - ${this.surname}`);
        console.log(`weight - ${this.weight}`);
        console.log(`height - ${this.height}`);
        console.log(`yearOfBirth - ${this.yearOfBirth}`);
        console.log(`hobbies - ${this.hobbies.join(", ")}`);
    }

    // Método para imprimir hobbies
    printHobbies() {
        console.log(`${this.name}'s hobbies:`);
        this.hobbies.forEach((hobby, index) => {
            console.log(`${index + 1}. ${hobby}`);
        });
    }
}

// Exportar la clase
export { Person };

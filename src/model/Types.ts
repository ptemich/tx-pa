type Direction = 'LEFT' | 'RIGHT';

interface InterfaceForData {
    name: string;
    age?: number; // opcjonalne pole
}

interface ExtendedInterfaceForData {
    working: boolean;
}

interface InterfaceForFunctions {
    drive(): string;
}

class Vehicle implements InterfaceForFunctions {

    constructor(private direction:Direction) {
        this.direction = direction;
    }

    drive():string {
        console.log(this.direction)
        return "vroom";
    }
}

class Car extends Vehicle {

    drive(): string {
        return "brum brum";
    }

}

type Rodzic = {
    pole1: string;
}


// takie fajne dziedziczenie propertek
type Dzieciak = Rodzic & {
    pole2: string;
}


let zmienna: Dzieciak = {
    pole1: 'test1',
    pole2: 'test2'
}

export type {
    InterfaceForData, InterfaceForFunctions
};
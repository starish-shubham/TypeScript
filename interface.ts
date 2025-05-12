// Interface for a class
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }
    
    stop(): void {
        console.log("Car stopped");
    }
}

class Bike implements Vehicle {
    start(): void {
        console.log("Bike started");
    }
    
    stop(): void {
        console.log("Bike stopped");
    }
}       

// Example usage
const myCar = new Car();
// myCar.start(); // Output: Car started
// myCar.stop(); // Output: Car stopped
const myBike = new Bike();
// myBike.start(); // Output: Bike started
// myBike.stop(); // Output: Bike stopped

interface Computer {
    name: string;
    readonly ram: number;
    storage: number;
}

// Declaration Merging
interface Computer {
    name: string;
    readonly ram: number;
    storage: number;
    screen?: string;
}


let macComputer1: Computer = {
    name: "MacBook Pro",
    ram: 16,
    storage: 512
}

// Example usage
console.log(macComputer1.name); // Output: MacBook Pro
console.log(macComputer1.ram); // Output: 16    
console.log(macComputer1.storage); // Output: 512
// Example usage
const dellComputer: Computer = {
    name: "Dell XPS",
    ram: 32,
    storage: 1024
};
// Example usage
console.log(dellComputer.name); // Output: Dell XPS

interface MathOperations {
    (a:number, b:number): number;
}
const add: MathOperations = (a, b) => a + b;
const subtract: MathOperations = (a, b) => a - b;
const multiply: MathOperations = (a, b) => a * b;
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15

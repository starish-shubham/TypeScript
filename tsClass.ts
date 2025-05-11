class PersonClass {
    name : string;
    readonly age : number;
    abc: string;

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.abc = "";
    }
}

const personClass = new PersonClass("John", 30);
console.log(personClass.name); // Output: John
console.log(personClass.age); // Output: 30

const personClass1 = new PersonClass("John", 30);
personClass1.abc = "abc";
// console.log(personClass1.abc); // Output: abc

// personClass1.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

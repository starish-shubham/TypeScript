type PersonRef = {
    name: string;
    age: number
}

const myPerson: PersonRef = {
    name: "Gupta",
    age: 23
}

// function to print personRef Object
function printObj(person: PersonRef) {
    console.log(`This is Name: ${person.name} || This is Age: ${person.age}`);
}

printObj(myPerson);
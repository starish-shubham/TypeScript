type personRef ={
    name: string;
    age: number
}

const myPerson: personRef = {
    name: "Gupta",
    age: 23
}

// function to print personRef Object
function printObj(person: personRef){
    console.log(`This is Name: ${person.name} || This is Age: ${person.age}`);
}

printObj(myPerson);
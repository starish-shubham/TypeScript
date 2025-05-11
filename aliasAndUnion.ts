type Std = {
    name: string;
    age: number
}

const myPerson: Std = {
    name: "Gupta",
    age: 23
}
myPerson.age=25;

// function to print personRef Object
function printObj(person: Std) {
    console.log(`This is Name: ${person.name} || This is Age: ${person.age}`);
}

// printObj(myPerson);


// Optional Properties
type Emp = {
    profile: string;
    readonly Id?: number
}


const myPerson1: Emp = {
    profile: "Gupta",
    // Id: 23
}

// function to print myPersonObj Object
function printObj1(person: Emp) {
    console.log(`This is Name: ${person.profile} || This is Age: ${person.Id}`);
}

// myPerson1.age=23  // note: can't assign age in myPerson because age is readonly type  

// printObj1(myPerson1);

type StdandEmp = Std&Emp;

const union = {
    name: "shubham",
    age: 23,
    profile: "Sdet",
    // Id: 29
}

function printUnionObj(obj:StdandEmp){
    console.log(`Name: ${obj.name} + age: ${obj.age} + profile: ${obj.profile} + Id: ${obj.Id}`);
}

// printUnionObj(union);

let abc: (string | number);
abc = "qw";
abc = 12;
console.log(abc);



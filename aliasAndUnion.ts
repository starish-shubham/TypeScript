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
    readonly Id?: number | string
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

let abc: (string | number) = 50;
// abc = "qw";
// abc = 12;
// console.log(abc);

const items: (number | string)[] = [1,2,3,"4"];
// console.log(items);

//Literals state the predefined values
let a1: "a" | "b" | "c" ;
a1 = "a";     // valid
// a1 = "d";  // invalid

let a2: 200 | 400 | 404 | 500 | 439 ;
a2=200 //valid
// a2=900 //invalid

let perSon : {n:"n1", a:2} | {n:"n2", a:3};
perSon = {n:"n1", a:2}
console.log(perSon);

let c: "m" = "m"; // this is same as c="m" in another line



type Person = { name: string };
const person: Person = { name: "Shubham" };

// console.log(person.name); 

let myNum: string = "12";
// console.log(myNum);

let color:any = "red";
// console.log(color);
color = color.toUpperCase();
// console.log(color);


color=100;
// console.log(color); 

color=true;
// console.log(color);


function addOne(n:number){
    return ++n;
}

console.log(addOne(2));


let addTwoNum = (x:number, y:number) => x+y;
console.log(addTwoNum(1,4));

let addTwoNum1: (x: number, y: number) => number = (x: number, y: number) => x + y;
console.log(addTwoNum1(4, 6)); 




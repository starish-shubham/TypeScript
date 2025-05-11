let myTuple: [string, number] = ["hello", 42];
myTuple[0] = "world"; // valid
// myTuple[0] = 23;  //invalid

//In TypeScript, destructuring a tuple simply means unpacking its elements into separate variables.
let tupleDestruction = myTuple;
console.log(tupleDestruction);

let [ first, second] = myTuple;
console.log(first);
console.log(second);

let tupleDestruction1 = [first,second];
console.log(tupleDestruction1);




// For refrence github - facebook/react

// For loop with Array without Method
console.log("-------For Loop------");
const Arr = ["1st","2nd","3rd"];
for(let i=0; i < Arr.length; i++){
  console.log(Arr[i]);
}
// While Loop ....

// Do While Loop
console.log("------Do While Loop--------");
let i=0;
do{
  console.log(i);
  i++;
} while(i<=5);


// ----------For In Loop - Array--------
console.log("---------- FOR IN LOOP - Array -----------");
const myArray = [true, 10, "abc",null];
console.log(myArray);
for(let key in myArray){
  console.log(myArray[key]); // key is index
}
// ----------For In Loop - Object--------
console.log("---------- FOR IN LOOP - Object -----------");
const myObject = {
  x: 10,
  y:true,
  z:"abc"
}
console.log(myObject);
for(let key in myObject){
  console.log(key,myObject[key]);
}


// -------------For Of Loop - Array
console.log("---------- FOR OF LOOP - Array -----------");
const myArray2 = [true, 10, "abc",null];
console.log(myArray2);
for(let element of myArray){
  console.log(element); // specific element
}
// ----------For Of Loop - Array with Object----------
console.log("------For Of Loop - Array with Object------");
const people = [
  {
    name: "Ronaldo",
    age: 26,
  },
  {
    name: "Messi",
    age: 28,
  },
  {
    name: "Neymar",
    age: 24,
  }
];
for(let person of people){
  console.log(person.name + " is " + person.age + " years old.");
}

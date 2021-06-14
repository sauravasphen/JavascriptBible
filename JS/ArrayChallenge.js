// ----------------------------UNSHIFT METHOD------------------
console.log("Unshift Method");
const myArray =[true, null];
console.log(myArray);
myArray.unshift("Hello");
myArray.unshift(100);
console.log(myArray); //[100, "Hello", true, null]
console.log("-----");
// ----------------Add array with index 10--------
const myArray2 = [1,2];
myArray2[10] = "abc";
console.log(myArray2);
console.log("------");
// ------------Create Array with Object-------------
const arrayOfCars = [{carBrand:"Ford",price:"$90000"},{carBrand:"Tata",price:"$50000"},{carBrand:"Bugati",price:"$100000"}]
console.log(arrayOfCars);
// arrayOfCars[3] = {carBrand:"Lamborgini",price:"$1,10,000"};
// arrayOfCars.push({carBrand:"Lamborgini",price:"$1,10,000"}); //Using Push Method
// Better way of Push Method
const newCar = {carBrand:"Lamborgini",price:"$1,10,000"};
arrayOfCars.push(newCar);
console.log(arrayOfCars);

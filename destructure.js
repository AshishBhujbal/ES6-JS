/*
Destructure
makes it easy to assign array 
values and object properties to distinct variables. For example,

destructure Object

order of name does not matter 
Note: When destructuring objects, you should use the 
same name for the variable as the corresponding object key.
*/

const Person ={
    name:"ashish",
    age:24,
    education :"MCA",
    address:"Pune",
    contact:2346548790
}

console.log(Person);
// change property name
let {name:fName,education,contact,age,address} =Person;
console.log(fName," ",address,"    ",education,"    ",contact,"    ",age);


const person = {
    name: 'Ashish',
    age: 24,
    hobbies: {
        read: true,
        playGame: true
    }
}
// nested destructuring 
const {name, hobbies: {read, playGame}} = person;

console.log(name); // Ashish
console.log(read); // true
console.log(playGame); // true
//// Array Destructuring
const arr =["one","two","three","four","five","six"];

let [first,second, ...remains] = arr;
console.log(first,"    ",second);
console.log(remains);

//// swap two variable

let v1 =10;
let v2 =20;

console.log("before Swapping")
console.log("v1: ",v1);
console.log("v2: ",v2);

[v2,v1]=[v1,v2];

console.log("After Swapping ");

console.log("v1: ",v1);
console.log("v2: ",v2);
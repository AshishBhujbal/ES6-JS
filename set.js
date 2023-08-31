/*
Set is similar to an array that allows us to store multiple 
items like numbers, strings, objects, etc. 

However, unlike an array, a set cannot contain duplicate values.

insertion order preserved

methods
add()
values()
has()
clear()

WeekSet is simmilar but only contain object and it is not iterable
*/

let set1 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);

console.log(set1.values());

console.log("set has 2 ",set1.has(2));
console.log(set1);
set1.clear();
console.log(set1);

/*
in map we can add object,function and other data types  as key 
1 insertion order is prserved 
2 it can be iterated using for of loop and forEach loop
3 we can calculate how many element in map using property called 'size'

methods
map.set(key,value);
map.get(key); return value
map.has(key); return boolean true or false
map.keys() itrate overs the map keys
map.values() itrate overs the map values
map.entries() return key and values 
map.clear() delete all element from map.
map.delete(key) delete particular pair if exists delete and retun true else false is returned.

*/
// set element into map

let map1 =new Map();

map1.set("name","Ashish");
map1.set("age",24);
map1.set("address","Pune");
map1.set("education","MCA");
map1.set({},"This is object as key.")

const myInfo =()=>console.log("This is function as key");

map1.set(myInfo,"function as key");

console.log(map1);

console.log("My Address is ", map1.get("address")); // get method
console.log("is name  present ? ",map1.has("name"));
console.log("delete experience ",map1.delete("exp"));// exp not present return false

// iterate overs a map for of loop
console.log("-----------------------------------------------------------------");
for(let [value,key] of map1)
{
    console.log(key,"        ",value);
}

// forEach loop
map1.forEach((key,value)=>console.log(key,"      ",value));

// keys()
for(let key of map1.keys())
{
    console.log(map1.get(key));
}
// values()
for(let value of map1.values())
{
    console.log(value);
}

//entries()

for(let[key,value] of map1.entries())
{
    console.log(key,"     ",value);
}

map1.clear();
console.log(map1);


// WeekMap is similar to Map  but only contain Object as key
// WeekMap is not iterable

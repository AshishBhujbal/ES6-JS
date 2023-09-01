
// let ages =[10,24,35,12,89,18];

    // ages.sort();// array is sorted
    // ages.reverse();// array is reversed

    // console.log(ages); //it print sorted and reversed array

// insert element at last in array
        // ages.push(100);
        // console.log(ages);

// remove last element from array
        // console.log(ages.pop());
        // console.log(ages);

//remove fist element from array
        // console.log(ages.shift());
        // console.log(ages);

// insert element at first position in array

        // console.log(ages.unshift(100,200));// it insert two element at first and second postion and return length of array
        // console.log(ages);//it print array

//----------------------------------------------------------------------------------------
//arrayReference.concat(array1,array2,... OR individual elements)return new array
//arrayReference.join("character") it joins all array element with specified character and make it string.
//arrayReference.slice(startIndex(including),endIndex(excluding)) it return array from start to end(exclude).
//arrayReference.splice(insertIndex,deletCount,elements,...) it insert element at specified postion insertIndex and second index is specifind items to delete 0 meanse not delete.

var names =["ashish","vishal","abhishek","mayur","mayur","suraj"];

        // const newNames1 =names.concat("kartik");
        // console.log(newNames1);

        // const newNames2 = names.concat("saurabh","aditya","akshay","swapnil");
        // console.log(newNames2);

        // let namesString = names.join("-");
        // console.log(namesString);

        // const slicedArray = names.slice(1,3);
        // console.log(slicedArray);

        // names.splice(2,0,"alex");// insert at 2 index 0 means not delete
        // console.log(names);//[ 'ashish', 'vishal', 'alex', 'abhishek', 'mayur', 'suraj' ]

        // names.splice(0,1,"raj");// insert at 0 index delete 1
        // console.log(names);//[ 'raj', 'vishal', 'alex', 'abhishek', 'mayur', 'suraj' ]

        // console.log("is names is array ",Array.isArray(names));
        // console.log(names.indexOf("mayur"));//3
        //console.log(names.lastIndexOf("mayur"));//4
        //console.log(names.entries());//Object [Array Iterator] {}

        // for(let [index,value] of names.entries())
        // {
        //     console.log("index: ",index,"      ","value:",value);
        // }
            /*
            index:  0        value: ashish
            index:  1        value: vishal
            index:  2        value: abhishek
            index:  3        value: mayur
            index:  4        value: mayur
            index:  5        value: suraj
            */

            const ages =[10,34,6,23,76,89,13];

            // let someAges = ages.some((age)=>age >20);
            // console.log(someAges);// true

            // let everyAges = ages.every((age)=>age >20);
            // console.log(everyAges);// false

            // let firstAdultValue= ages.find((age)=>age>18);
            // console.log(firstAdultValue);// return value of first element in array that pass the test

            // let firstAdultIndex = ages.findIndex((age)=>age>18);
            // console.log(firstAdultIndex);same as find but return index not value.

            // filter()// it create new array based on condition and return it
                // let newAges = ages.filter((age)=> age>30);
                // console.log(newAges);//[ 34, 76, 89 ]
            //toString() it convert array into string
                // console.log(typeof ages); // object
                // let agesString = ages.toString();
                // console.log(agesString);
                // console.log(typeof agesString); // string

            // console.log(ages.valueOf());//it print the array

            //fill()  it fill all array element with static data

            // ages.fill(1000);
            // console.log(ages);
            /*
             [
                1000, 1000,
                1000, 1000,
                1000, 1000,
                1000
             ]
            */
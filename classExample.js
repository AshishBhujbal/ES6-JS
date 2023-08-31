
class Person
{
  constructor(fname,lname,age)
  {
    this.fname=fname;
    this.lname=lname;
    this.age=age;
  }
  welcome()
  {
    console.log(`parent ${this.fname}`);
  }

  set firstName(fname)
  {
    this.fname=fname;
  }
}

            //const person = new Person("ashish","bhujbal",24);
            // const person1 = new Person("Raj","Kumar",80);
            // console.log(person1);
            // console.log(person);
            // person.displayPerson();

            // person.firstName =process.argv[2];
            // console.log(person);
//// inheritance

class Employee extends Person
{
    constructor(fname,lname,age,designation)
    {
        super(fname,lname,age);
        this.designation = designation;
    }

    welcome()
    {
        console.log(`Welcome ${this.fname}  ${this.lname} des: ${this.designation} age ${this.age}`);
    }
}

const emp = new Employee("kartik","jaiswal",34,"Backend Dev");

emp.welcome()
console.log(emp instanceof Person);


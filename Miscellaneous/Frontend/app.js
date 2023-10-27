class Person{
    constructor(name,age){
        console.log("Person Constructor was Called!!");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,age,marks){
        console.log("Student Constructor was Called!!!");
        super(name,age);
        this.marks = marks;
    }
}
let s1 = new Student("CG",20,99);
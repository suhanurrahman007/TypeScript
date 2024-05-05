{
    class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address =address;
    }

    getSleep(numOfHours: number){
        console.log(`${this.name} will sleep for ${numOfHours}`);
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string){
        super(name, age, address)
    }
}

const student = new Student("SuHan", 24, "Dhaka")
// student.getSleep


class Teacher extends Person{
    gender: string;

    constructor(name: string, age: number, address: string, gender: string){
        super(name, age, address)
        this.gender = gender;

    }


    takeClass (numOfClass : number){
        console.log(`${this.name} will take ${numOfClass}`);
    }
}

const teacher = new Teacher("SuHan", 24, "Dhaka" , "female")
// teacher.takeClass

}
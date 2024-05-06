{
    class Person {
    getSleep(){
        console.log("This Person Sleep is 8 hour");
    }
}

class Student {
    getSleep(){
        console.log("This Person Sleep is 7 hour");
    }
}

class Developer {
    getSleep(){
        console.log("This Person Sleep is 6 hour");
    }
}

const getSleepHours = (time: Person) =>{
    time.getSleep()
}


const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()

getSleepHours(person1)
getSleepHours(person2)
getSleepHours(person3)


class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    
    radius: number;
    constructor(radius: number){
        super()
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

// const getCircle = (total: Shape) =>{
//     console.log(total.getArea());
// }

class Rectangle extends Shape {
    
    width: number;
    hight: number;
    constructor(width: number, hight: number){
        super()
        this.width = width;
        this.hight = hight
    }

    getArea(): number {
        return this.hight * this.width;
    }
}

const getShape = (total: Shape) =>{
    console.log(total.getArea());
}

const shape1 = new Shape()
const shape2 = new Circle(40)
const shape3 = new Rectangle(10, 5)

getShape(shape1)
getShape(shape2)
getShape(shape3)









}
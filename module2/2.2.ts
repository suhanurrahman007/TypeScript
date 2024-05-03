// Object type and interface

type User1 = {
    name: string;
    age: number;
}

interface User2 {
    name: string;
    age: number;
}

type UserWithRole1 = User1 & {role : string}

interface UserWithRole2 extends User2 {
    role: string;
}

const user1: UserWithRole1 ={
    name: "SuHan",
    age: 24,
    role: "manager"
}

const user2: UserWithRole2 ={
    name: "RuHan",
    age: 26,
    role: "Boss"
}
// Array type and interface
type Roll1 = number[];

interface Roll2 {
    [index : number] : number;
}

const rollNumber1: Roll1 = [1,2,3]
const rollNumber2: Roll2 = [4,2,3]

// Function type and interface

type Add1 = (num1: number , num2: number) => number
interface Add2 {
    (num1 : number , num2: number) : number
}

const Add1 : Add1 = (num1, num2) => num1 + num2;
const Add2 : Add2 = (num1, num2) => num1 + num2;

773831
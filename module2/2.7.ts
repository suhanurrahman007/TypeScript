{
    type Vehicle = {
    bike: string;
    cat: string;
    ship: string;
} 

type Owner = keyof Vehicle
const person: Owner = "bike" 

const getValue = <X, Y extends keyof X> (obj : X, key : Y) =>{
    return obj[key]
}

const user = {
    name: "Mr X",
    age: 26,
    address: "HuDai"
}

const result = getValue(user, "age")
}
let anything : any;

anything = "Next level developer here"

const KgToGm = (value: string | number) : string | number | undefined =>{
    if (typeof value === "string") {
        const convertValue = parseFloat(value)
        return `The Convert Value is ${convertValue * 1000}`
    }
    if (typeof value === "number") {
        return value * 1000;
    }
}

const result1 = KgToGm(1000) as number;
const result2 = KgToGm("1000") as string;

console.log(result1);
console.log(result2);

type CustomError = {
    message : string;
}

try {
    
} catch (error) {
    console.log((error as CustomError).message);
}
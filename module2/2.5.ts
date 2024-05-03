const createArray = (param: string): string[] =>{
    return[param]
}

const genericsArray = <T> (param: T): T[] =>{
    return[param]
}

type User = {
    id: number;
    name: string
}

const result1 = createArray("SuHan")

const result2 = genericsArray<boolean>(true)

const result3 = genericsArray<User>({
    id: 434,
    name: "SuHan"
})

console.log(result1, result2, result3)

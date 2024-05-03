// Generic type

type GenericArray<T> = Array<T>

const roleNumbers: GenericArray<number> = [1,2,3,4,5]
const mentor: GenericArray<string> = ["Raki, Sahib, Rofl"]
const isAdmin: GenericArray<boolean> = [true, false, false, true]


const user: GenericArray<{name: string, age: number}> = [
    {
        name: "Raki",
        age: 29
    },
    {
        name: "Sahib",
        age: 34
    },{
        name: "Rofl",
        age: 295.
        // role : "manager"
    }
] 
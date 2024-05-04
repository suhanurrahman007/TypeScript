{
    const addCourseToStudent = <T extends {
    id: number;
    name: string;
    email: string
}>(student: T) =>{
    const course = "Next Level developer";
    return{
        ...student,
        course
    }
}

const student1 = addCourseToStudent({
    id: 222,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLW"
})

const student2 = addCourseToStudent({
    id: 223,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "apple Watch"
})

const student3 = addCourseToStudent({
    id: 224,
    name: "Mr Z",
    email: "z@gmail.com",
    water: "white"
})
}
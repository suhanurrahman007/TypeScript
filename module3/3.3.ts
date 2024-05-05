{
    const person = (person1: string | number , person2: string | number
)  : string | number  =>{

    if (typeof person1 === "number" && typeof person2 === "number") {
        return person1 + person2
        
    } else {
        return person1.toString() + person2.toString()
    }

}

const result = person("6", 3)
console.log(result);


type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin"
}

const normalUser = {
    name : "SuHan"
}

const adminUser = {
    name : "RuHan",
    role: "admin"
}

const getUser = (user: NormalUser | AdminUser) =>{
    if ("role" in user) {
        console.log(`${user.name} is ${user.role} user`);
    } else {
        console.log(`${user.name} is normal user`);
    }
}



const isUser = getUser(adminUser)
console.log(isUser);




}
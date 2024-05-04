const createPromise = (): Promise<string> =>{
    return new Promise<string> ((resolve, reject) =>{
        const data : string = "HuDai"
        if (data) {
            resolve(data)
        }else{
            reject("There is no data here")
        }
    })
}

const showData = async () : Promise<string> =>{
    const data : string = await createPromise()
    return data
    // console.log(data);
}

showData()
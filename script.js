var p1 = new Promise((resolve,reject)=>{
    var age = parseInt(prompt("Enter the name of the person"))
    if(age >= 18){
        return resolve("You are eligible")

    }
    else{
        return reject("Poda Punda")
    }
})

p1.then((data)=>console.log(data)).catch((error)=>console.log(error))

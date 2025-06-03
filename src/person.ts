type Person = {
    name : string,
    age : number,
    isEmployed : boolean
}

const printPerson = (person : Person) => {
    console.log(person.name + " " + person.age + " " + person.isEmployed)
}


printPerson({name:"manideep",age:20,isEmployed:false});
class Skylaber {
    fullname: string;
    constructor(
         public firstname: string,
         public lastname : string, 
         public middleInitial: string
         ){
            this.fullname = `${firstname} ${middleInitial} ${lastname}`
    }
}

interface Person {
    firstname: string,
    lastname: string
}


function greeter(person: Person): string{
    return `Hello ${person.firstname} ${person.lastname}`;
}

let user: Person = new Skylaber();

document.body.innerHTML = greeter(user);

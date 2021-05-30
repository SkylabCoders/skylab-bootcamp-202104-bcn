class Skylaber {
    fullName: string;
    constructor(
        public firstName: string, 
        public middleInitial: string,
        public lastName: string
    ){
        this.fullName = `${firstName}${middleInitial}${lastName}`;
    }
}


interface Person {
    firstName: string, 
    lastName: string
}

function greeter(person: Skylaber) : string {
    return `Hello ${person.fullName}`;
}

let user: Person = new Skylaber ('Jane', 'M', 'User');

document.body.innerText = greeter(user);
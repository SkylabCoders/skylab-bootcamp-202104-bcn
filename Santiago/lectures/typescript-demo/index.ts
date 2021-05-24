class Skylaber {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastname: string,
    ){
        this.fullName = `${this.firstName} ${this.middleInitial} ${this.lastname}`
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person): string {
    return `Hello ${person.firstName} ${person.lastName}`
}

let user: Person = { firstName: 'Jane', lastName: 'User' };
document.body.innerHTML = greeter(user);

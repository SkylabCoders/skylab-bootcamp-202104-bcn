class Skylaber {
    fullname: string;

    constructor(
        public firstname: string,
        public middleinitial: string,
        public lastname: string,
    ) {
        this.fullname = '${firstname} ${middleinitial} ${lastname}'
    }
}

interface Person {
    firstname: string,
    lastname: string
}

function greeter(person: Person): string {
    return `Hello ${person.firstname} ${person.lastname}`;
};

let user: Person = {firstname: 'hey', lastname: 'how'};

document.body.innerHTML = greeter(user);
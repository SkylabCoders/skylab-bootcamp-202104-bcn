function greeter(person: string): string {
    return `Hello ${person}`;
}

let user: string = 'Fer';

document.body.innerHTML = greeter(user);

export interface User {
    _id: string;
    name: string;
    surname: string;
    email: string,
    country: string,
    age: number,
    direction: {
        street: string,
        streetNumber: number,
        door: string,
        flat: string,
        cp: string,
    },
}
export interface Hero {
    _id: string;
    name: string;
    biography: {
        aliases: [string]
    }
}
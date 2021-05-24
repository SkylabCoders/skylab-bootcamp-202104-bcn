export interface Flat {
    id: string,
    img: string,
    type: string,
    price: string,
    adress: string
}

export interface ApiData {
    jsonapi: object,
    data: [],
    meta: object,
    links: object
}
export interface Flat {
    id: string,
    attributes: {
        field_inmu_imag_arra: [ string ]
    }
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
export interface flatInfo {
    id: string,
    attributes: {
        field_inmu_imag_arra: [string],
        field_inmu_prec: string,
        field_inmu_tipo_via: string,
        field_inmu_nomb_call: string,
        field_inmu_tipo_sin_agru: string
    }
    type: string,
    price: string,
    address: string
}

export interface ApiData {
    jsonapi: object,
    data: [],
    meta: object,
    links: object
}
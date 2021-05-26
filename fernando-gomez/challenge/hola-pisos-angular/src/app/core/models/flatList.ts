export interface FlatList {
    data: [{
    type: string,
    id: string,
    links: {
        self: {
            href: string
        }
    },
    attributes: {
        field_inmu_area_cons: string,
        field_inmu_imag_arra: string[],
        field_inmu_nomb_call: string,
        field_inmu_nume_habi: number,
        field_inmu_pobl: string,
        field_inmu_prec: string,
        field_inmu_refe: string,
        field_inmu_tipo_sin_agru: string,
        field_inmu_tipo_via: string
    }
    }],
    meta: {
        count: string
    }
    links: {
        last: {
            href: string
        },
        next: {
            href: string
        },
        self: {
            href: string
        }
    }
}
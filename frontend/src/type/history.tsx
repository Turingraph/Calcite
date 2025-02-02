import * as a from "./alias"

export type link_item_t<t> = {
    value:a.value<t>,
    prev?:link_item_t<t>|undefined,
    next?:link_item_t<t>|undefined
}

export type link_list_t<t> = {
    components:link_item_t<t>,
    length:number
}

export type history<t> = a.nominal<link_list_t<t>>|undefined
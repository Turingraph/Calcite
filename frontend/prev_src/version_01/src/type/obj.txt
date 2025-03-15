import * as a from "./alias"

export type user_t = {
    name:a.name,
    password:string,
    first_date?:undefined|Date,
    last_date?:undefined|Date,
    status?:number
}

export type their_t = {
    name:a.name,
    // select:a.select,
    img:a.img,
    origin:a.img,
    // dilate:a.img,
    // history:a.history<a.img>,
    ocr: string,
    osd: string
}

export type rect_t = {
    x?:number|undefined,
    y?:number|undefined,
    w?:number|undefined,
    h?:number|undefined,
}

export type box_t = {
    name:a.name,
    view:boolean,
    // ocr:boolean,
    min:rect_t,
    max:rect_t,
    r?:undefined|number,
    g?:undefined|number,
    b?:undefined|number,
}

export const BOXES_INPUT_ATTR = [
    "min_x",
    "min_y",
    "min_w",
    "min_h",
    "max_x",
    "max_y",
    "max_w",
    "max_h",
    "r",
    "g",
    "b",
]

export type boxes_input_attr_t = "min_x"|
    "min_y"|
    "min_w"|
    "min_h"|
    "max_x"|
    "max_y"|
    "max_w"|
    "max_h"|
    "r"|
    "g"|
    "b"

export const BOXES_DEFAULT_INPUT = [
    0,
    0,
    0,
    0,
    200,
    200,
    200,
    200,
    250,
    0,
    0,
]

export type arr_attr_t<t extends object> = {
    arr:t[], 
    this_item:number, 
    attrs:string[]
}

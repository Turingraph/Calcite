import * as a from "./alias"

export type user_t = {
    name:a.name,
    select:a.select,
    password:string,
    first_date?:undefined|Date,
    last_date?:undefined|Date,
    status?:number
}

export type img_t = {
    name:a.name,
    select:a.select,
    img:a.img,
    original?:a.img,
    dilate?:a.img,
    history?:a.history<a.img>,
    ocr_text?: string,
    osd?: string
}

export type box_t = {
    name:a.name,
    view:boolean,
    ocr:boolean,
    min_x?:undefined|number,
    min_y?:undefined|number,
    min_w?:undefined|number,
    min_h?:undefined|number,
    max_x?:undefined|number,
    max_y?:undefined|number,
    max_w?:undefined|number,
    max_h?:undefined|number,
    r?:undefined|number,
    g?:undefined|number,
    b?:undefined|number,
}

export const BOXES_INPUT_KEY = [
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

export type boxes_input_key_t = "min_x"|
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
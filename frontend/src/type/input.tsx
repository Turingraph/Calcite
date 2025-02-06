import * as a from "./alias"

export type input_multi_t = {
    opt_name?:a.opt_name,
    input_num?:undefined|input_num_t[],
    input_str?:undefined|input_str_t[],
    option_name?:undefined|a.name[]
    input_option?:undefined|string[][]|input_option_t[][]
}

export type input_num_t = {
    opt_name?:a.opt_name,
    value:a.value<number>,
    show_value:a.value<string>
}

export type input_str_t = {
    opt_name?:a.opt_name,
    value:a.value<string>
}

export type input_option_t = {
    name:a.name,
    value:number
}
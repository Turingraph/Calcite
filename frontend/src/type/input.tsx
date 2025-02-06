import * as a from "./alias"

export type input_multi_t = {
    opt_name?:a.opt_name,
    input_num?:undefined|input_num_t[],
    input_str?:undefined|input_str_t[],
    input_option?:undefined|input_option_t[]
}

export type input_num_t = {
    opt_name:a.opt_name,
    input:a.use_state_t<number>
    default_input:number
}

export type input_str_t = {
    opt_name:a.opt_name,
    input:a.use_state_t<string>
}

export type option_mode_t = {
    name:a.name,
    value:number
}

export type input_option_t = {
    opt_name?:a.opt_name
    available_opts:string[]
    ss_mode:a.use_state_t<number>
    is_search_bar?:boolean
}

import * as a from "./alias"

export type combine_input_t = {
    opt_name?:a.opt_name,
    input_str?:undefined|input_t<string|number>[],
    input_opt?:undefined|input_opt_t[]
    func_activate?:a.func_event,
    is_undo?:boolean
}

// https://stackoverflow.com/questions/61862235/
// default-value-for-typescript-type-alias

export type input_t<t> = {
    opt_name:a.opt_name,
    input:a.use_state_t<t>
    default_input?:undefined|t
}

export type opt_mode_t = {
    name:a.name,
    index:number
}

export type input_opt_t = {
    opt_name?:a.opt_name
    available_opts:string[]
    ss_mode:a.use_state_t<number>
    is_search_bar?:boolean
}

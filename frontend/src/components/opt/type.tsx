import * as a from "../../type/alias"

export type opt_mode_uit = {
    name:a.name,
    index:number
}

export type opt_input_uit = {
    opt_name?:a.opt_name
    available_opts:string[]|opt_mode_uit[]
    ss_mode:a.use_state_t<number>
    is_search_bar?:boolean
}

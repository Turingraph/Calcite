import * as a from "../../type/alias"
import * as uarr from "../../utils/utils_arr"

export type opt_mode_uit = {
    name:a.name,
    index:number
}

export type opt_input_uit = {
    opt_name?:a.opt_name
    available_opts:string[]|opt_mode_uit[]
    ss_mode:a.use_state_t<number|undefined>
    is_search_bar?:boolean
}

export function func_default_newobj_index(available_opts:opt_mode_uit[], length:number){
    available_opts = uarr.sort_arr_attr(available_opts, "index")
    if (available_opts.length > length){
        return available_opts[length].index
    }
    return undefined
}

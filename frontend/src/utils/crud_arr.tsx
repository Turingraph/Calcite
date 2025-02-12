import * as a from "../type/alias";

export function func_create_obj<t>(
    input:t,
    arr:a.use_state_t<t[]>
){
    let update_arr = [...arr.ss]
    update_arr.push(input)
    arr.setss(update_arr)
}
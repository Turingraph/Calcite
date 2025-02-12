import * as a from "../type/alias";

export function func_create_obj<t>(
    input:t,
    arr:a.use_state_t<t[]>
){
    let update_arr = [...arr.ss]
    update_arr.push(input)
    arr.setss(update_arr)
}

export function func_delete_obj<t>(index:number,arr:a.use_state_t<t[]>){
    let update_arr = [...arr.ss]
    update_arr.splice(index, 1)
    arr.setss(update_arr)
}
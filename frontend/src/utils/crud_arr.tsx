import * as a from "../type/alias";

export function func_update_item<t>(
        index:number, 
        input_arr:a.use_state_t<t[]>, 
        update_input:t){
    let update_arr = [...input_arr.ss]
    update_arr[index]  = update_input
    input_arr.setss(update_arr)
}

export function func_update_arr<t>(
        arr:a.use_state_t<t>[],
        func_event:(e:t)=>void,
        input:t[]
    ){
    arr.map((item, index)=>{
        item.setss(input[index])
        func_event(input[index])
    })
}

export function func_push_arr<t>(
    input:t,
    arr:a.use_state_t<t[]>
){
    let update_arr = [...arr.ss]
    update_arr.push(input)
    arr.setss(update_arr)
}

export function func_delete_arr<t>(index:number,arr:a.use_state_t<t[]>){
    let update_arr = [...arr.ss]
    update_arr.splice(index, 1)
    arr.setss(update_arr)
}

export function func_edit_arr<
    t extends object, 
    k extends keyof t>(
        index:number,
        arr:a.use_state_t<Record<k, t>[]>,
        key:k,
        input:t
    ){
        let update_arr = [...arr.ss]
        update_arr[index][key] = input
        arr.setss(update_arr)
    }
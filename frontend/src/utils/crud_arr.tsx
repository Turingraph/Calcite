import * as a from "../type/alias";

// Any, Unknown, Never
// https://youtu.be/kWmUNChlzVw?si=DwNwPVm6KJG4nIco

// https://www.reddit.com/r/typescript/comments/s1rdbp/
// how_to_check_that_an_unknown_object_has_a/

export default function Get_unknown_prob({
    unknown_obj,
    property,
    type,
    func_event = (()=>undefined) as a.func_event
}:{
    unknown_obj:unknown
    property:string,
    type:string
    func_event?:a.func_event
}){
    if (
        unknown_obj &&
        typeof unknown_obj === 'object' &&
        property in unknown_obj &&
        typeof ((unknown_obj as Record<string, any>)[property]) === type
    ){
        func_event()
        return ((unknown_obj as Record<string, any>)[property])
    }
    return undefined
}

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

export function func_handle_type<
            t extends "string" | "number" |
             "bigint" |"boolean" | "symbol" | 
             "undefined" | "object" | "function",u>(
        default_input:t,
        input:t|u
){
    const const_t = typeof default_input
    let let_output:typeof const_t;
    try{
        let_output = input as t
    }
    catch{
        let_output = default_input
    }
    return let_output
}

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

export function func_edit_obj<
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
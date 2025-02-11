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

export function func_update_arr<t>(
        index:number, 
        input_arr:a.use_state_t<t[]>, 
        update_input:t){
    let update_arr = [...input_arr.ss]
    update_arr[index]  = update_input
    input_arr.setss(update_arr)
}
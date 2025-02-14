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

// https://stackoverflow.com/questions/53807517/
// how-to-test-if-two-types-are-exactly-the-same
export type equal_type<T, U> =
    (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2) ? 1 : 0;

export function func_get_keys<t extends object>(obj:t){
    return [a as keyof typeof obj]
}

export function func_check_key<t extends object>(obj:t, key:string){
    let arr = func_get_keys(obj) as string[]
    if (arr.includes(key)){
        return true
    }
    else{
        return false
    }
}
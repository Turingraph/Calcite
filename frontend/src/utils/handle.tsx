import * as a from "../type/alias";
import { opt_mode_uit } from "../components/search/type";

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


export function func_handle_num_type(
        default_input:number,
        input:string
){
    if(!Number.isNaN(Number(input))){
        return Number(input)
    }
    return default_input
}

// export function func_handle_type<
//             t extends "string" | "number" |
//              "bigint" |"boolean" | "symbol" | 
//              "undefined" | "object" | "function",u>(
//         default_input:t,
//         input:t|u
// ){
//     const CONST_T = typeof default_input
//     let let_output:typeof CONST_T;
//     try{
//         let_output = input as t
//     }
//     catch{
//         let_output = default_input
//     }
//     return let_output
// }

// https://stackoverflow.com/questions/53807517/
// how-to-test-if-two-types-are-exactly-the-same
export type equal_type<T, U> =
    (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2) ? 1 : 0;

export function func_get_attrs<t extends object>(obj:t){
    return [a as keyof typeof obj]
}

export function func_check_attr<t extends object>(obj:t, attr:string){
    const ARR = func_get_attrs(obj) as string[]
    if (ARR.includes(attr)){
        return true
    }
    else{
        return false
    }
}

export function func_get_create_mode(
    arr:number[]){
        const UPDATE_ARR = [... arr]
        // https://stackoverflow.com/questions/21687907/
        // typescript-sorting-an-array
        UPDATE_ARR.sort((n1,n2) => n1 - n2)
        let y = 0
        for(const i in UPDATE_ARR){
            if(y == Number(i)){
                y += 1
            }
            else{
                return y
            }
        }
        return y
    }

export function func_exclude_arr<t>(arr_all:t[], arr_exclude:t[]){
    return arr_all.map((item)=>{
        if(arr_exclude.map(
            (item)=>{return JSON.stringify(item)}
            ).includes(JSON.stringify(item)) === false
        ){
            return item
        }
    }).filter((item)=> item != undefined) as t[]
}

export function func_access_optmode(index:number|undefined, arr:opt_mode_uit[]){
    if(index === undefined){
        return undefined
    }
    for(let i = 0; i < arr.length; i++){
        const item = arr[i]
        if (index == item.index){
            return item
        }
    }
    return undefined
}

export function func_identity<t>(x:t){
    const Y = x
    return Y
}

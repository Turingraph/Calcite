import * as a from "../type/alias";
import { opt_mode_uit } from "../components/opt/type";

// Any, Unknown, Never
// https://youtu.be/kWmUNChlzVw?si=DwNwPVm6KJG4nIco

// https://www.reddit.com/r/typescript/comments/s1rdbp/
// how_to_check_that_an_unknown_object_has_a/

export default function get_unknown({
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

export function get_finite_id(arr:number[], max:number){
    const UPDATE_ARR = [...arr]
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array
    UPDATE_ARR.sort((n0, n1) => n0 > n1 ? -1 : 1)
    let y = 0
    let i = 0
    while(i < UPDATE_ARR.length){
        if(y === Number(i)){
            y += 1
            i += 1
        }
        else{
            i = UPDATE_ARR.length
        }
    }
    if (y >= max){
        return undefined
    }
    return y
}

export function access_optmode(index:number|undefined, arr:opt_mode_uit[]){
    if(index === undefined){
        return undefined
    }
    for(let i = 0; i < arr.length; i++){
        if (index === arr[i].index){
            return arr[i]
        }
    }
    return undefined
}

export function identity<t>(x:t){
    const Y = x
    return Y
}

// https://stackoverflow.com/questions/586182/
// https://medium.com/analytics-vidhya/
// 3-ways-to-copy-by-value-any-composite-data-type-in-javascript-ca3c730e4d2f

export function copy_obj<t>(input:t){
    return JSON.parse(JSON.stringify(input))
}
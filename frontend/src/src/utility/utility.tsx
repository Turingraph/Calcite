import * as a from "../type/alias";
import { opt_mode_uit } from "../components/opt/type";

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

// https://stackoverflow.com/questions/586182/
// https://medium.com/analytics-vidhya/
// 3-ways-to-copy-by-value-any-composite-data-type-in-javascript-ca3c730e4d2f

export function copy_obj<t>(input:t){
    return JSON.parse(JSON.stringify(input)) as t
}

export function copy_edit_obj<t>(input:t){
    return JSON.parse(JSON.stringify(input)) as t  
}
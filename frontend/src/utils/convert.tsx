import * as a from "../../src/type/alias"
import React, { JSX } from "react";
import { opt_mode_uit } from "../components/search/type";

/*
Rule of every function in this file.
1.  It should have `_to_` at the middle of the name or begin with `check_` to check the type.
2.  It should be used for convert variable to get valid output
*/

export const HEX_ARR = [ 
    '0', '1', '2', '3', 
    '4', '5', '6', '7', 
    '8', '9', 'A', 'B', 
    'C', 'D', 'E', 'F'
]

export function Num_to_ksize(input:number){
    if(Math.floor(input) < 3){
        return 3
    }
    else{
        if (Math.floor(input) % 2 == 1){
            return Math.floor(input)
        }
        else{
            return Math.floor(input) + 1
        }
    }
}

export function Num_to_size(input:number, maxval:number){
    if (input > maxval){
        return maxval
    }
    else if(input < 0){
        return 0
    }
    else{
        return input 
    }
}

export function Num_to_255(input:number){
    return Num_to_size(input,255)
}

export function Num_to_hex(input = 0){  
    if (input == undefined){
        return "FF";
    }
    if (input > 255){
        input = 255;
    }
    if (input < 0){
        input = 0;
    }
    return (HEX_ARR[input/16] + HEX_ARR[input%16]);
}

export function Num_to_rgb(input:undefined|number|number[]){
    if (input == undefined){return "#FFFFFF"}
    else if (typeof input === "number"){
        return "#" + Num_to_hex(input)+"0000";
    }
    else if (Array.isArray(input) == true){
        if (input.length == 0){
            return "#FFFFFF"
        }
        else if (input.length == 1){
            return "#" + Num_to_hex(input[0]) + Num_to_hex(input[0]) + Num_to_hex(input[0]);
        }
        else if (input.length == 2){
            return "#" + Num_to_hex(input[0])+Num_to_hex(input[1])+"00";
        }
        else{
            return "#" + Num_to_hex(input[0])+Num_to_hex(input[1]) + Num_to_hex(input[2]);
        }
    }
    else{
        return "#FFFFFF";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Opt_to_jsx<t>({
    arr = undefined,
    jsx_element
}:{
    arr?:t
    jsx_element:(t:t)=>JSX.Element
}){
    if(arr != undefined){
        return jsx_element(arr)
    }
    return [<></>]
}

export function Opt_to_jsx_arr<t>({
    arr = undefined,
    jsx_element
}:{
    arr?:undefined|t[]
    jsx_element:(t:t)=>JSX.Element
}){
    if(arr != undefined){
        return arr.map((item)=>{
            return jsx_element(item)
        })
    }
    return [<></>]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Str_to_h(
{
    opt_name = undefined
}:a.opt_name_t
){
    if (opt_name != undefined)
    {
        return (<h1>{opt_name}</h1>)
    }
    return (<></>)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Str_to_num(input:string){
    const REGEXP = /[a-zA-Z]/g;
    if (/^\d+$/.test(input) == false){
        // console.log("Warning: Input should contains only number.")
        return 0;
    }
    return Number(input)
}

export function Str_to_default_num(
    default_input:number,
    input:string
){
if(!Number.isNaN(Number(input))){
    return Number(input)
}
return default_input
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Str_to_str(input:string){
    if (input == undefined){
        return ""
    }
    return input
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Strarr_to_optmode(arr:string[]){
    return arr.map((item, index)=>{
        return {
            name:item as a.name,
            index:index
        } as opt_mode_uit
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Numarr_to_strarr(numarr:number[], strarr:string[]){
    return numarr.map((item)=>{
        return strarr[item]
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Item_to_index<t>(arr:t[],item:t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return i
        }
    }
    return undefined
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://stackoverflow.com/questions/53807517/
// how-to-test-if-two-types-are-exactly-the-same

export type equal_type_t<T, U> =
    (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2) ? 1 : 0;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export function Input_to_default<
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://stackoverflow.com/questions/76299963/
// typescript-check-if-object-has-property-and-check-property-input

// export function check_obj<t>(arg:unknown){
//     return !!arg && typeof arg === 'object' && !Array.isArray(arg);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export function Obj_to_key<t extends object>(obj:t){
//     return [a as keyof typeof obj]
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export function check_attr<t extends object>(obj:t, attr:string){
//     const ARR = check_get_attrs(obj) as string[]
//     if (ARR.includes(attr)){
//         return true
//     }
//     else{
//         return false
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

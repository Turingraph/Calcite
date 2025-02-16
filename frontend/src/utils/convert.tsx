import * as a from "../../src/type/alias"
import React, { JSX } from "react";
import { opt_mode_uit } from "../components/search/type";

export const HEX_ARR = [ 
    '0', '1', '2', '3', 
    '4', '5', '6', '7', 
    '8', '9', 'A', 'B', 
    'C', 'D', 'E', 'F'
]

export function Int_to_ksize(n:number){
    if(Math.floor(n) < 3){
        return 3
    }
    else{
        if (Math.floor(n) % 2 == 1){
            return Math.floor(n)
        }
        else{
            return Math.floor(n) + 1
        }
    }
}

export function Int_to_size(value:number, maxval:number){
    if (value > maxval){
        return maxval
    }
    else if(value < 0){
        return 0
    }
    else{
        return value 
    }
}

export function Int_to_255(value:number){
    return Int_to_size(value,255)
}

export function Int_to_hex({
    value = 0           
}:a.value_t<undefined|number>
){  
    if (value == undefined){
        return "FF";
    }
    if (value > 255){
        value = 255;
    }
    if (value < 0){
        value = 0;
    }
    return (HEX_ARR[value/16] + HEX_ARR[value%16]);
}

export function Int_to_rgb({
    value
}:a.value_t<undefined|number|number[]>
){
if (value == undefined){return "#FFFFFF"}
else if (typeof value === "number"){
    return "#" + Int_to_hex({value:value})+"0000";
}
else if (Array.isArray(value) == true){
    if (value.length == 0){
        return "#FFFFFF"
    }
    else if (value.length == 1){
        return "#" + Int_to_hex({value:value[0]}) + Int_to_hex({value:value[0]}) + Int_to_hex({value:value[0]});
    }
    else if (value.length == 2){
        return "#" + Int_to_hex({value:value[0]})+Int_to_hex({value:value[1]})+"00";
    }
    else{
        return "#" + Int_to_hex({value:value[0]})+Int_to_hex({value:value[1]}) + Int_to_hex({value:value[2]});
    }
}
else{
    // console.log("------------------------------------------------------------------------")
    // console.log("Warning: value is invalid.")
    // console.log("Int_to_rgb({value}:{value?:undefined|number|number[]})");
    // console.log("reported by frontend/src/hex_rgb/int_to_rgb.tsx");
    // console.log("------------------------------------------------------------------------")
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

export function Str_to_num({value}:a.value_t<string>){
    const REGEXP = /[a-zA-Z]/g;
    if (/^\d+$/.test(value) == false){
        // console.log("Warning: Input should contains only number.")
        return 0;
    }
    return Number(value)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function Str_to_str({value}:a.value_t<string>){
    if (value == undefined){
        return ""
    }
    return value
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
import * as a from "../type/alias"
import { anymonth_t, month_t } from "../type/utility";

//------------------------------------------------------------------------------------

// TITLE : NUM

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

export function num_to_ksize(input:number){
    if(Math.floor(input) < 3){
        return 3
    }
    else{
        if (Math.floor(input) % 2 === 1){
            return Math.floor(input)
        }
        else{
            return Math.floor(input) + 1
        }
    }
}

export function num_to_size(input:number|undefined, maxval:number, min:number = 0){
    if (input === undefined){
        return maxval
    }
    else if (input > maxval){
        return maxval
    }
    else if (input < min){
        return min
    }
    else{
        return input 
    }
}

export function num_to_255(input:number){
    return num_to_size(input,255)
}

export function num_to_rgb(input:undefined|number|number[]){
    if (input === undefined){
        return "#FFFFFF"
    }
    else if (typeof input === "number"){
        return "rgb("+num_to_255(input).toString()+"0, 0)";
    }
    else if (Array.isArray(input) === true){
        if (input.length === 0){
            return "#FFFFFF"
        }
        else if (input.length === 1){
            return "rgb("+num_to_255(input[0]).toString() + "," + num_to_255(input[0]).toString() + "," + num_to_255(input[0]).toString()+")";
        }
        else if (input.length === 2){
            return "rgb("+num_to_255(input[0]).toString() + ","+num_to_255(input[1]).toString() + ","+"0)";
        }
        else{
            return "rgb("+num_to_255(input[0]).toString() + ","+num_to_255(input[1]).toString() + "," + num_to_255(input[2]).toString()+")";
        }
    }
    else{
        return "#FFFFFF";
    }
}

export function str_to_default_num(
    default_input:number,
    input:string
){
if(!Number.isNaN(Number(input))){
    return Number(input)
}
return default_input
}

//------------------------------------------------------------------------------------

// TITLE : ARRAY

export function numarr_to_strarr(numarr:number[], strarr:string[]){
    return numarr.map((item)=>{
        return strarr[item]
    })
}

export function item_to_index<t>(arr:t[],item:t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return i
        }
    }
    return undefined
}

export function arr_to_opt<
    t extends {[x: string]: any}>
    (arr:(string|t)[]){
    return arr.map((item, index)=>{
        if(typeof item === "string"){
            return {
            attr:item as a.attr,
            value:index
            } as a.attr_value<number>
        }
        else if(typeof item.attr === "string"){
            if(typeof item.value === "number"){
                return {
                    attr:item.attr as a.attr,
                    value:item.value
                } as a.attr_value<number>
            }
            else{
                return {
                    attr:item.attr as a.attr,
                    value:item.index
                } as a.attr_value<number>
            }
        }
        else if(typeof item.name === "string"){
            if(typeof item.value === "number"){
                return {
                    attr:item.name as a.attr,
                    value:item.value
                } as a.attr_value<number>
            }
            else{
                return {
                    attr:item.name as a.attr,
                    value:item.item
                } as a.attr_value<number>
            }
        }
        else{
            return {
                attr:JSON.stringify(item),
                value:index
            } as a.attr_value<number>
        }
    })
}

//------------------------------------------------------------------------------------

// TITLE : ATTR ARRAY

/*
av = attr_value
nv = name_value
*/

export function arr_to_value<t>(input:(a.attr_value<t>|a.name_value<t>)[]){
    return input.map((item)=>{
        return item.value
    })
}

export function avarr_to_str<t>(input:a.attr_value<t>[]){
    return input.map((item)=>{
        return item.attr
    })
}

export function nvarr_to_str<t>(input:a.name_value<t>[]){
    return input.map((item)=>{
        return item.name
    })
}

export function value_to_varr<t>(value:t|undefined, arr:(a.attr_value<t>|a.name_value<t>)[]){
    if(value === undefined){
        return undefined
    }
    for(let i = 0; i < arr.length; i++){
        if (value === arr[i].value){
            return arr[i]
        }
    }
    return undefined
}

export function str_to_avarr<t>(name:string, arr:a.attr_value<t>[]){
    let i = 0
    while(i < arr.length){
        if(name === arr[i].attr){
            return arr[i]
        }
        i++
    }
    return undefined
}

export function str_to_nvarr<t>(name:string, arr:a.name_value<t>[]){
    let i = 0
    while(i < arr.length){
        if(name === arr[i].name){
            return arr[i]
        }
        i++
    }
    return undefined
}

export function nvarr_to_avarr<t>(arr:a.name_value<t>[]){
    return arr.map((item)=>{
        return {
            attr:item.name as a.attr,
            value:item.value
        } as a.attr_value<t>
    })
}

export function avarr_to_nvarr<t>(arr:a.attr_value<t>[]){
    return arr.map((item)=>{
        return {
            name:item.attr as a.name,
            value:item.value
        } as a.name_value<t>
    })
}

//------------------------------------------------------------------------------------

// TITLE : DATE

export function anymonth_to_num(input:anymonth_t){
    if(typeof input === "number"){
        return input
    }
    const VALUE = input.toUpperCase().substring(0, 3)
    switch(VALUE){
        case "JAN":{
            return 1
        }
        case "FEB":{
            return 2
        }
        case "MAR":{
            return 3
        }
        case "APR":{
            return 4
        }
        case "MAY":{
            return 5
        }
        case "JUN":{
            return 6
        }
        case "JUL":{
            return 7
        }
        case "AUG":{
            return 8
        }
        case "SEP":{
            return 9
        }
        case "OCT":{
            return 10
        }
        case "NOV":{
            return 11
        }
        case "DEC":{
            return 12
        }
        default:{
            console.log("convert.tsx/anymonth_to_num : Invalid Month")
            return -1
        }
    }
}

export function num_to_index_name(input:number){
    if(Math.abs(input) < 10){
        return "0"+Math.abs(input).toString()
    }
    return Math.abs(input).toString()
}

export function anymonth_to_month(input:anymonth_t){
    return num_to_index_name(anymonth_to_num(input)) as month_t
}

export function file_to_date(item:File|undefined = undefined, gmt:boolean=false){
    const DAY = (item ? new Date(item.lastModified) : new Date()).toString().split(" ")
    return (gmt ? DAY[5].replace("+","-")+"_" : "")+
        DAY[3]+"-"+anymonth_to_month(DAY[1] as anymonth_t)+"-"+DAY[2]+
        "_"+(DAY[4].split(":").join("-"))
}

//------------------------------------------------------------------------------------

// TITLE : FILE

export function file_to_url(input:Blob|MediaSource|File){
    return URL.createObjectURL(input)
}

export async function url_to_file(input:string, metadata:string = 'text/plain'){
    // https://stackoverflow.com/questions/25046301/
    // convert-url-to-file-or-blob-for-filereader-readasdataurl
    const RESPONSE = await fetch(input);
    const DATA = await RESPONSE.blob();
    return new File([DATA], "test.jpg", {type:metadata});
}

// https://stackoverflow.com/questions/42980645/
// easier-way-to-transform-formdata-into-query-string
export function formdata_to_url(input:FormData){
    return new URLSearchParams(
    input as unknown as Record<string, string>,
    ).toString();
}

//------------------------------------------------------------------------------------

// TITLE : UTILITY

export function STR_TO_H(
    {
        opt_name = undefined
    }:{
        opt_name:a.opt_name
    }
    ){
        if (opt_name !== undefined)
        {
            return (<h1>{opt_name}</h1>)
        }
        return (<></>)
    }

export function str_to_str(input:string|a.name|a.opt_name){
    if (input === undefined){
        return ""
    }
    return input
}

    
//------------------------------------------------------------------------------------

// TITLE : MISTAKE FUNCTION

/*
The reason is because given that 

RULES OF HOOK
1.  Only call Hooks at the top level 
2.  Only call Hooks from React functions 
    (function that contains hook should 
    begin with big letter, or custom hook)

The JSX Element update everytime the Hook is updated.

REFERENCE
-   https://react.dev/reference/rules/rules-of-hooks

Implies that when the Hook is updated, the {jsx_element(item)} does not updated.
If {jsx_element(item)} contains hook, this cause Error.

On the other hands when the Hook is updated, every <JSX_Element .../> updated,
which prevent error
*/

// export function OPT_TO_JSX_ARR<t>({
//     arr = undefined, jsx_element
// }: {
//     arr?: undefined | t[];
//     jsx_element: (t: t) => JSX.Element;
// }){
//     if(arr != undefined){
//         return arr.map((item,index)=>{
//             return <div key={index}>
//                 {jsx_element(item)}
//                 </div>
//         })
//     }
//     return [<></>]
// }
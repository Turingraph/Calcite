import * as a from "../type/alias"
import { opt_mode_uit } from "../components/opt/type";

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

export function num_to_size(input:number|undefined, maxval:number){
    if (input === undefined){
        return maxval
    }
    else if (input > maxval){
        return maxval
    }
    else if (input < 0){
        return 0
    }
    else{
        return input 
    }
}

export function num_to_255(input:number){
    return num_to_size(input,255)
}

export function num_to_hex(input:number|undefined = 0){  
    if (input === undefined){
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

export function num_to_rgb(input:undefined|number|number[]){
    if (input === undefined){return "#FFFFFF"}
    else if (typeof input === "number"){
        return "#" + num_to_hex(input)+"0000";
    }
    else if (Array.isArray(input) === true){
        if (input.length === 0){
            return "#FFFFFF"
        }
        else if (input.length === 1){
            return "#" + num_to_hex(input[0]) + num_to_hex(input[0]) + num_to_hex(input[0]);
        }
        else if (input.length === 2){
            return "#" + num_to_hex(input[0])+num_to_hex(input[1])+"00";
        }
        else{
            return "#" + num_to_hex(input[0])+num_to_hex(input[1]) + num_to_hex(input[2]);
        }
    }
    else{
        return "#FFFFFF";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
THIS WAS THE MISTAKE FUNCTION

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function STR_TO_H(
{
    opt_name = undefined
}:a.opt_name_t
){
    if (opt_name !== undefined)
    {
        return (<h1>{opt_name}</h1>)
    }
    return (<></>)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function str_to_default_num(
    default_input:number,
    input:string
){
if(!Number.isNaN(Number(input))){
    return Number(input)
}
return default_input
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function str_to_str(input:string|a.name|a.opt_name){
    if (input === undefined){
        return ""
    }
    return input
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function strarr_to_optmode(arr:string[]){
    return arr.map((item, index)=>{
        return {
            name:item as a.name,
            index:index
        } as opt_mode_uit
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function numarr_to_strarr(numarr:number[], strarr:string[]){
    return numarr.map((item)=>{
        return strarr[item]
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function item_to_index<t>(arr:t[],item:t){
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

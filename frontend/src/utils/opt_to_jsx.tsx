import React, { JSX } from "react";

export default function Opt_to_jsx<t>({
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
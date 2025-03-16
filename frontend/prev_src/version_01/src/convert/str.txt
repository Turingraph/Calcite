import React from "react"
import * as a from "../type/alias"

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

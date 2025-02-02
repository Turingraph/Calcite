import React from "react"
import * as a from "../../src/type/alias"

export default function Str_to_h(
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

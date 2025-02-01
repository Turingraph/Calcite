import React from "react"
import title_t from "../types/basic/title_t"

export default function Str_to_h(
{
    title = undefined
}:title_t
){
    if (title != undefined)
    {
        return (<h1>{title}</h1>)
    }
    return (<></>)
}

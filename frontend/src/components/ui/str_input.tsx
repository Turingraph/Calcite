import React, { JSX, useState, useEffect } from "react";
import ss_str_input_t from "../../types/components/ui/ss_str_input_t";
import Str_to_str from "../../utils/str_to_str";

export default function Str_input(
{
    title = undefined,
    ss_input,
    setss_input
}:ss_str_input_t
){
    let str_placeholder = Str_to_str({title:title});
    return (<>
        <input 
            onChange={()=>{setss_input(ss_input)}} 
            value={ss_input}
            placeholder={str_placeholder}>
        
        </input>
    </>);
}

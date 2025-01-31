import React, { JSX, useState, useEffect } from "react";
import str_input_type from "./type";
import Str_to_str from "../../optional_input/str_to_str";

export default function Str_input(
{
    title = undefined,
    ss_input,
    setss_input
}:str_input_type
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

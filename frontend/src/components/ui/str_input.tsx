import React, { JSX, useState, useEffect } from "react";
import * as a from "../../type/alias"
import Str_to_str from "../../utils/str_to_str";

export default function Str_input(
{
    opt_name = undefined,
    input
}:{
    opt_name:a.opt_name,
    input:a.value_t<string>
}
){
    const [ss_input, setss_input] = useState<string>(input.value)
    useEffect(()=>{
        input = {value:ss_input}
    },[ss_input])
    let str_placeholder = Str_to_str({value:opt_name as a.value<string>});
    return (<>
        <input 
            onChange={()=>{setss_input(input.value)}} 
            value={input.value}
            placeholder={str_placeholder}>
        
        </input>
    </>);
}

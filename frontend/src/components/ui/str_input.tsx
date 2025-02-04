import React, { JSX, useState, useEffect } from "react";
import * as a from "../../type/alias"
import Str_to_str from "../../utils/str_to_str";

export default function Str_input(
{
    opt_name = undefined,
    input
}:{
    opt_name:a.opt_name,
    input:a.use_state_t<string>
}
){
    let str_placeholder = Str_to_str({value:opt_name as a.value<string>});
    return (<>
        <input 
            onChange={()=>{input.setss(input.ss)}} 
            value={input.ss}
            placeholder={str_placeholder}>
        </input>
    </>);
}

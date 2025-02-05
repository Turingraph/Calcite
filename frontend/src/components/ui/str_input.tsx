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
    // https://www.geeksforgeeks.org/how-to-handle-input-forms-with-usestate-hook-in-react/
    let str_placeholder = Str_to_str({value:opt_name as a.value<string>});
    const handle_event = ((e: React.ChangeEvent<HTMLInputElement>) => {
            input.setss(e.target.value)}) as a.handle_event<HTMLInputElement>
    return (<>
        <input 
            type = "text"
            onChange={(e)=>handle_event(e)} 
            value={input.ss}
            placeholder={str_placeholder}>
        </input>
    </>);
}

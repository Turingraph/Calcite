import React, {useEffect} from "react";
import * as a from "../../type/alias"
import {Str_to_str} from "../../utils/convert";

export default function Input_str(
{
    opt_name = undefined,
    input,
    index = undefined
}:{
    opt_name:a.opt_name,
    input:a.use_state_t<string>,
    index?:number|undefined
}
){
    // https://www.geeksforgeeks.org/how-to-handle-input-forms-with-usestate-hook-in-react/
    const STR_PLACEHOLDER = Str_to_str(opt_name as string);
    const handle_event = ((e: React.ChangeEvent<HTMLInputElement>) => {
            input.setss(e.target.value)}) as a.handle_event<HTMLInputElement>
    return (<>
        <input 
            type = "text"
            onChange={(e)=>handle_event(e)} 
            value={index != undefined ? input.ss[index] : input.ss}
            placeholder={STR_PLACEHOLDER}>
        </input>
    </>);
}

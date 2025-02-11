import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import { input_t } from "../../type/input";
import {Str_to_str} from "../../utils/convert";

export default function Text_area(
{
    opt_name = undefined,
    input,
    default_input = undefined
}:input_t<string>
){
    // https://www.geeksforgeeks.org/how-to-handle-input-forms-with-usestate-hook-in-react/
    let str_placeholder = Str_to_str({value:opt_name as a.value<string>});
    const handle_event = ((e: React.ChangeEvent<HTMLTextAreaElement>) => {
            input.setss(e.target.value)}) as a.handle_event<HTMLTextAreaElement>
    return (<>
        <textarea 
            onChange={(e)=>handle_event(e)} 
            value={input.ss}
            placeholder={str_placeholder}>
        </textarea>
    </>);
}
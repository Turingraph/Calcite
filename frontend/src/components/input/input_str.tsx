import React, {useEffect} from "react";
import * as a from "../../type/alias"
import {Str_to_str} from "../../utils/convert";

export default function Input_str(
{
    opt_name = undefined,
    input,
    index = undefined,
    ui_mode = "input"
}:{
    opt_name:a.opt_name,
    input:a.use_state_t<string>,
    index?:number|undefined,
    ui_mode?:"input"|"text_area"
}
){
    // https://www.geeksforgeeks.org/how-to-handle-input-forms-with-usestate-hook-in-react/
    const STR_PLACEHOLDER = Str_to_str(opt_name as string);
    const HANDLE_INPUT = ((e: React.ChangeEvent<HTMLInputElement>) => {
            input.setss(e.target.value)}) as a.handle_event<HTMLInputElement>
    const HANDLE_TEXT_AREA = ((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        input.setss(e.target.value)}) as a.handle_event<HTMLTextAreaElement>
    let jsx_element = <>
        <input 
            type = "text"
            onChange={(e)=>HANDLE_INPUT(e)} 
            value={index != undefined ? input.ss[index] : input.ss}
            placeholder={STR_PLACEHOLDER}>
        </input>
    </>
    if(ui_mode === "text_area"){
        jsx_element = <>
        <textarea
            onChange={(e)=>HANDLE_TEXT_AREA(e)} 
            value={index != undefined ? input.ss[index] : input.ss}
            placeholder={STR_PLACEHOLDER}>
        </textarea>
    </>
    }
    return <>
    {jsx_element}
    </>
}

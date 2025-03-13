import React from "react";
import * as a from "../../type/alias"
import { str_to_str } from "../../convert/str";
import "./index.css"

export default function INPUT_STR(
{
    opt_name = undefined,
    input,
    ui_mode = "input"
}:{
    opt_name?:a.opt_name,
    input:a.use_state_t<string>,
    ui_mode?:"input"|"text_area"
}
){
    // https://www.geeksforgeeks.org/how-to-handle-input-forms-with-usestate-hook-in-react/
    const STR_PLACEHOLDER = str_to_str(opt_name as string);
    const HANDLE_INPUT = ((e: React.ChangeEvent<HTMLInputElement>) => {
        input.setss(e.target.value)}) as a.handle_event<HTMLInputElement>
    const HANDLE_TEXT_AREA = ((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        input.setss(e.target.value)}) as a.handle_event<HTMLTextAreaElement>
    if(ui_mode === "text_area"){
        return <>
        <textarea
            onChange={(e)=>HANDLE_TEXT_AREA(e)} 
            value={input.ss}
            placeholder={STR_PLACEHOLDER}>
        </textarea>
    </>
    }
    return <>
    <input 
        type = "text"
        onChange={(e)=>HANDLE_INPUT(e)} 
        value={input.ss}
        placeholder={STR_PLACEHOLDER}>
    </input>
</>
}

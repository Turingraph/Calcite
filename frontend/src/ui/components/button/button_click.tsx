import React from "react";
import * as a from "../../type/alias"
import "./index.css"

export type button_click_t = {
    name?:a.name,
    func_event:a.func_event
}

export default function BUTTON_CLICK(
{
    name = "button" as a.name,
    func_event,
}:button_click_t
){
    return (<>
        <button onClick={func_event} >
            {name}
        </button>
    </>);
}

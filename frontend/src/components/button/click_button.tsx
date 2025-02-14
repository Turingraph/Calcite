import React from "react";
import * as a from "../../type/alias"

export type click_button_t = {
    name?:a.name,
    func_event:a.func_event
}

export default function Click_button(
{
    name = "button" as a.name,
    func_event,
}:click_button_t
){
    return (<>
        <button onClick={func_event} >
            {name}
        </button>
    </>);
}

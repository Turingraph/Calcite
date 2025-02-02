import React, { JSX } from "react";
import * as a from "../../type/alias"

export type click_button_t = {
    name?:a.name,
    event_func:a.event_func
}

export default function Click_button(
{
    name = "button" as a.name,
    event_func,
}:click_button_t
){
    return (<>
        <button onClick={()=>{event_func}} >
            {name}
        </button>
    </>);
}

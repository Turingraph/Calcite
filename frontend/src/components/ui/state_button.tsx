import React, { JSX } from "react";
import state_button_t from "../../types/components/ui/state_button_t";

export default function State_button(
{
    title = "button",
    input_func,
}:state_button_t
){
    // onMouseDown={()=>{setss_effect(ss_effect)}} 
    return (<>
        <button onClick={()=>{input_func}} >
            {title}
        </button>
    </>);
}

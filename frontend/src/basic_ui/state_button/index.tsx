import React, { JSX } from "react";
import state_button_type from "./type";
import Int_to_rgb from "../../hex_rgb/int_to_rgb";
export default function State_button(
{
    title,
    input_function,
}:state_button_type
){
    // onMouseDown={()=>{setss_effect(ss_effect)}} 
    return (<>
        <button onClick={()=>{input_function}} >
            {title}
        </button>
    </>);
}

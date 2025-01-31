import React, { JSX } from "react";
import state_button_type from "./type";

export default function State_button<type>(
{
    title,
    ss_effect,
    setss_effect
}:state_button_type<type>
){
    return (<>
<button onClick={()=>{setss_effect(ss_effect)}}>{title}</button>
</>);
}

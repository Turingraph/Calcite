import React, { JSX } from "react";
import state_button_type from "./type";

export default function State_button<type extends object>(
{
    title,
    update_value,
    update_func
}:state_button_type<type>
){
    return (<>
<button onClick={()=>{update_func(update_value)}}>{title}</button>
</>);
}

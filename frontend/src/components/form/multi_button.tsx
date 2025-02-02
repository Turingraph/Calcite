import React from "react";
import * as a from "../../type/alias"
import Click_button, {click_button_t} from "../ui/click_button";

export default function Multi_button(
{
    button_arr,
}:{button_arr:click_button_t[]}
){
    let jsx_output = button_arr.map((i)=>{
        return <Click_button 
                    name={i.name}
                    event_func={i.event_func}
                />
    })
    return <>{jsx_output}</>
}

import React from "react";
import show_tab_type from "./type";
import State_button from "../../basic_ui/state_button";

export default function Show_tab(
{
    ss_select,
    setss_select,
    title_array,
    normal_rgb = [255, 255, 255],
    select_rgb = [255, 0, 0]
}:show_tab_type
){
    let jsx_output = title_array.map((title,index)=>{
        let rgb = normal_rgb;
        if (index == ss_select){
            rgb = select_rgb;
        }
        return <State_button 
                    title={title}
                    ss_effect={index}
                    setss_effect={setss_select}
                    rgb = {rgb}
                />
    })
    return <>{jsx_output}</>
}

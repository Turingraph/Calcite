import React, {useState} from "react";
import show_tab_type from "./type";
import State_button from "../../basic_ui/state_button";
import Color_ui from "../../basic_ui/color_ui";
import Int_to_rgb from "../../hex_rgb/int_to_rgb";

export default function Show_tab(
{
    component_array,
    button_titles
}:show_tab_type
){
    const [ss_select, setss_select] = useState<number>(0);
    const normal_rgb = 255;
    const select_rgb = [255,0,0];
    let button_array = button_titles.map((title,index)=>{
        let rgb:number|number[] = normal_rgb;
        if (index == ss_select){
            rgb = select_rgb;
        }
        let jsx_body = <State_button 
                    title={title}
                    input_function={()=>setss_select(index)}
                />
        return <Color_ui component={jsx_body} rgb={rgb}/>
    })
    return <>
        {button_array}
        {component_array[ss_select]}
    </>
}

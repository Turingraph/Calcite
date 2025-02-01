import React, {useState} from "react";
import show_tab_t from "../../types/components/from/show_tab_t";
import State_button from "../ui/state_button";
import Color_ui from "../ui/color_ui";

export default function Show_tab(
{
    components,
    button_titles
}:show_tab_t
){
    const [ss_select, setss_select] = useState<number>(0);
    const normal_rgb = 255;
    const select_rgb = [255,0,0];
    let buttons = button_titles.map((title,index)=>{
        let rgb:number|number[] = normal_rgb;
        if (index == ss_select){
            rgb = select_rgb;
        }
        let jsx_body = <State_button 
                    title={title}
                    input_func={()=>setss_select(index)}
                />
        return <Color_ui component={jsx_body} rgb={rgb}/>
    })
    return <>
        {buttons}
        {components[ss_select]}
    </>
}

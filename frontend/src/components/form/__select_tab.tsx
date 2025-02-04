import React, {useState, JSX} from "react";
import * as a from "../../type/alias"
import State_button from "../ui/click_button";
import Color_ui from "../ui/color_ui";

export default function Select_tab(
{
    jsx_elements,
    name_arr
}:{
    jsx_elements:JSX.Element[]
    name_arr:a.arr<a.name>
}
){
    const [ss_select, setss_select] = useState<number>(0);
    const normal_rgb = 255;
    const select_rgb = [255,0,0];
    let buttons = name_arr.map((name,index)=>{
        let rgb:number|number[] = normal_rgb;
        if (index == ss_select){
            rgb = select_rgb;
        }
        let jsx_element = <State_button 
                    name={name}
                    event_func={(()=>setss_select(index)) as a.event_func}
                />
        return <Color_ui jsx_element={jsx_element} rgb={rgb}/>
    })
    return <>
        {buttons}
        {jsx_elements[ss_select]}
    </>
}

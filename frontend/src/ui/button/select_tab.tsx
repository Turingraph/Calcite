import React, {useState, JSX} from "react";
import * as a from "../../type/alias"
import Click_button from "./click_button";
import Color_ui from "../asset/color_ui";

export default function Select_tab(
{
    jsx_elements,
    name_arr
}:{
    jsx_elements:JSX.Element[]
    name_arr:a.name[]
}
){
    const [ss_select, setss_select] = useState<number>(0);
    const NORMAL_RGB = 255;
    const SELECT_RGB = [255,0,0];
    let button_arr = name_arr.map((name,index)=>{
        let rgb:number|number[] = NORMAL_RGB;
        if (index == ss_select){
            rgb = SELECT_RGB;
        }
        let jsx_element = <Click_button 
                    name={name}
                    func_event={(()=>setss_select(index)) as a.func_event}
                />
        return <Color_ui jsx_element={jsx_element} rgb={rgb}/>
    })
    return <>
        {button_arr}
        {jsx_elements[ss_select]}
    </>
}

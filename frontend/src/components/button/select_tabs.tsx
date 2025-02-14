import React, {useState, JSX} from "react";
import * as a from "../../type/alias"
import Click_button from "./click_button";
import Color_ui from "../asset/color_ui";

export default function Select_tabs(
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
    const BUTTON_ARR = name_arr.map((name,index)=>{
        const JSX_ELEMENT = <Click_button 
                    name={name}
                    func_event={(()=>setss_select(index)) as a.func_event}
                />
        return <Color_ui 
            jsx_element={JSX_ELEMENT} 
            rgb={index == ss_select ? SELECT_RGB : NORMAL_RGB}
            />
    })
    return <>
        {BUTTON_ARR}
        {jsx_elements[ss_select]}
    </>
}

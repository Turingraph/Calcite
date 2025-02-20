import {useState, JSX} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "./button_click";
import COLOR_UI from "../asset/color_ui";

export default function BUTTON_TABS(
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
        const JSX_ELEMENT = <BUTTON_CLICK 
                    name={name}
                    func_event={(()=>setss_select(index)) as a.func_event}
                />
        return <div key={index}>
            <COLOR_UI 
            jsx_element={JSX_ELEMENT} 
            rgb={index === ss_select ? SELECT_RGB : NORMAL_RGB}
            /></div>
    })
    return <>
        {BUTTON_ARR}
        {jsx_elements[ss_select]}
    </>
}

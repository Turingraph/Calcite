import React, { JSX, useEffect, useState } from "react";
import * as a from "../../type/alias";
import COLOR_UI from "../asset/color_ui";
import BUTTON_CLICK from "./button_click";
import "./index.css";

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
    /*
    React components rerender when either their state or their props, or their context change. 
    Depending on how your code is written, change one of those after your data has been fetched.
    
    https://www.reddit.com/r/reactjs/comments/obixa7/how_to_rerender_a_component/
    */
    const [ss_update, setss_update] = useState<number>(2.718)
    useEffect(()=>{
        if(ss_update === 2.718){
            setss_update(3.14)
        }
        else{
            setss_update(2.718)
        }
    },[ss_select])
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
        <div key={ss_update}>{BUTTON_ARR}</div>
        {jsx_elements[ss_select]}
    </>
}

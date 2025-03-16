import React, {useState} from "react";
import PANEL, {panel_t} from "./panel";
import BUTTON_CLICK from "../button/button_click";
import * as a from "../../type/alias"
import "./index.css"

export default function CLOSE_PANEL({
    name,
    jsx_element,                     
    x_scroll_bar = false,                  
    y_scroll_bar = false,                  
    w  = undefined,                           
    h = undefined, 
}:panel_t &{
    name:a.name
}){
    const [ss_open_ui, setss_open_ui] = useState<boolean>(false)
    const JSX_BUTTON_ON = <BUTTON_CLICK name={"open " + name as a.name} func_event={(()=>{setss_open_ui(true)}) as a.func_event}/>
    const JSX_BUTTON_OFF= <BUTTON_CLICK name={"close " + name as a.name} func_event={(()=>{setss_open_ui(false)}) as a.func_event}/>
    const JSX_PANEL = <>
    <PANEL
        jsx_element={jsx_element}
        x_scroll_bar={x_scroll_bar}
        y_scroll_bar={y_scroll_bar}
        w={w}
        h={h}
    />
    </>
    if (ss_open_ui === true){
        return <>
            {JSX_BUTTON_OFF}
            {JSX_PANEL}
        </>
    }
    return <>{JSX_BUTTON_ON}</>
}
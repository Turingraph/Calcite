import {useState} from "react";
import Panel, {panel_t} from "./panel";
import Button_click from "../button/button_click";
import * as a from "../../type/alias"

export default function Close_panel({
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
    const JSX_BUTTON_ON = <Button_click name={"open " + name as a.name} func_event={(()=>{setss_open_ui(true)}) as a.func_event}/>
    const JSX_BUTTON_OFF= <Button_click name={"close " + name as a.name} func_event={(()=>{setss_open_ui(false)}) as a.func_event}/>
    const JSX_PANEL = <>
    <Panel
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
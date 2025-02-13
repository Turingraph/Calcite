import React, {JSX, useState} from "react";
import Panel, {panel_t} from "./panel";
import Click_button from "../button/click_button";
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
    let jsx_button_on = <Click_button name={"open " + name as a.name} func_event={(()=>{setss_open_ui(true)}) as a.func_event}/>
    let jsx_button_off= <Click_button name={"close " + name as a.name} func_event={(()=>{setss_open_ui(true)}) as a.func_event}/>
    let jsx_panel = <>
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
            {jsx_button_off}
            {jsx_panel}
        </>
    }
    return <>{jsx_button_on}</>
}
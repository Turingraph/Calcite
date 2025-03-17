import React, { JSX } from "react";
import "./index.css";

export type panel_t = {
    jsx_element:JSX.Element,
    x_scroll_bar?:boolean,
    y_scroll_bar?:boolean,
    w?:undefined|number,
    h?:undefined|number,
}

export default function PANEL(
{
    jsx_element,                     
    // x_scroll_bar = false,                  
    // y_scroll_bar = false,                  
    // w  = undefined,                           
    // h = undefined,                          
}:panel_t){
    return (<>{jsx_element}</>)
}

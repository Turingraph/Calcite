import React from "react";
import panel_type from "./type";

export default function Panel(
{
    component,                     
    x_scroll_bar = false,                  
    y_scroll_bar = false,                  
    w  = undefined,                           
    h = undefined,                          
}:panel_type
){
    return (<>{component}</>)
}

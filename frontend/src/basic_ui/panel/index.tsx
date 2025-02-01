import React from "react";
import panel_t from "./type";

export default function Panel(
{
    component,                     
    x_scroll_bar = false,                  
    y_scroll_bar = false,                  
    w  = undefined,                           
    h = undefined,                          
}:panel_t
){
    return (<>{component}</>)
}

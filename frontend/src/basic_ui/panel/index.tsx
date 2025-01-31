import React from "react";
import panel_type from "./type";

export default function Panel(
{
    component,                     
    x_scroll_bar,                  
    y_scroll_bar,                  
    width,                           
    height,                          
}:panel_type
){
    return (<>{component}</>)
}

import React from "react";
import panel_t from "../../types/components/ui/panel_t";

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

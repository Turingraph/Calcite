import React, {JSX} from "react";

export default function Panel(
{
    jsx_element,                     
    x_scroll_bar = false,                  
    y_scroll_bar = false,                  
    w  = undefined,                           
    h = undefined,                          
}:{
    jsx_element:JSX.Element,
    x_scroll_bar?:boolean,
    y_scroll_bar?:boolean,
    w?:undefined|number,
    h?:undefined|number,
}){
    return (<>{jsx_element}</>)
}

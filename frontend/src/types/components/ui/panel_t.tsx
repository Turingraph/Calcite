import React, {JSX} from "react"

type panel_t = {
    component:JSX.Element,
    x_scroll_bar?:boolean,                  
    y_scroll_bar?:boolean,                  
    w?:undefined|number,                           
    h?:undefined|number, 
}

export default panel_t
import { JSX } from "react";

type panel_type = {
    component:JSX.Element
    x_scroll_bar:boolean,
    y_scroll_bar:boolean,
    width:number|undefined,
    height:number|undefined
};

export default panel_type;

import { JSX } from "react";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

type panel_t = {
    component:JSX.Element
    x_scroll_bar?:boolean,
    y_scroll_bar?:boolean,
    w?:number|undefined,
    h?:number|undefined
};

export default panel_t;

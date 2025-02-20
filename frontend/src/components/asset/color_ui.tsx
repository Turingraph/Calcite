import {JSX} from "react";
import {Num_to_rgb} from "../../utils/convert";

export default function Color_ui({
    jsx_element,
    rgb=255
}:{
    jsx_element:JSX.Element,
    rgb?:number|number[]
}){
    return <div style={{backgroundColor:Num_to_rgb(rgb)}}>{jsx_element}</div>
}

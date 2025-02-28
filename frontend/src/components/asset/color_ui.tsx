import {JSX} from "react";
import {num_to_rgb} from "../../utility/convert";
import "./index.css"

export default function COLOR_UI({
    jsx_element,
    rgb=255
}:{
    jsx_element:JSX.Element,
    rgb?:number|number[]
}){
    return <div style={{backgroundColor:num_to_rgb(rgb)}}>{jsx_element}</div>
}

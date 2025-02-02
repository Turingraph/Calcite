import React, {JSX} from "react";
import Int_to_rgb from "../../utils/int_to_rgb";
import * as a from "../../type/alias"

export default function Color_ui({
    jsx_element,
    rgb=255
}:{
    jsx_element:JSX.Element,
    rgb?:number|number[]
}){
    return <div style={{backgroundColor:Int_to_rgb({value:rgb})}}>{jsx_element}</div>
}

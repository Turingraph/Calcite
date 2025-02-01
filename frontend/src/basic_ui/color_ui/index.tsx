import React from "react";
import color_ui_type from "./type";
import Int_to_rgb from "../../hex_rgb/int_to_rgb";

export default function Color_ui({
    component,
    rgb=255
}:color_ui_type
){
    return <div style={{backgroundColor:Int_to_rgb({input:rgb})}}>{body}</div>
}

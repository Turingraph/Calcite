import React from "react";
import Int_to_rgb from "../../utils/int_to_rgb";
import color_ui_t from "../../types/components/ui/color_ui";

export default function Color_ui({
    component,
    rgb=255
}:color_ui_t
){
    return <div style={{backgroundColor:Int_to_rgb({input:rgb})}}>{component}</div>
}

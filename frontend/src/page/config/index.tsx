import React, {useState} from "react";
import Select_tabs from "../../components/button/select_tabs";
import * as a from '../../type/alias'
import Config_ocr from "./config_ocr";
import Config_img from "./config_img";
import Config_boxes from "./config_boxes";

export default function Page_config({
    //
}:{
    //
}){
    let config_name = [
        "OCR" as a.name,
        "Image Processing" as a.name,
        "Bounding Box" as a.name,
    ]
    let config_tab = <Select_tabs
        name_arr={config_name}
        jsx_elements={[
            <Config_ocr/>,
            <Config_img/>,
            <Config_boxes/>
        ]}
    />
    let config = <><h1>Advance Setting</h1>{config_tab}</>
    return <>
        {config}
    </>
}
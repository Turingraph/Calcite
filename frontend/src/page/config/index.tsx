import React, {useState} from "react";
import Select_tabs from "../../components/button/select_tabs";
import * as a from '../../type/alias'
import Config_ocr from "./config_ocr";
import Config_img from "./config_img";
import Config_boxes from "./config_boxes";

export default function Page_config(){
    const CONFIG_NAME = [
        "OCR" as a.name,
        "Image Processing" as a.name,
        "Bounding Box" as a.name,
    ]
    const CONFIG_TAB = <Select_tabs
        name_arr={CONFIG_NAME}
        jsx_elements={[
            <Config_ocr/>,
            <Config_img/>,
            <Config_boxes/>
        ]}
    />
    const CONFIG = <><h1>Advance Setting</h1>{CONFIG_TAB}</>
    return <>
        {CONFIG}
    </>
}
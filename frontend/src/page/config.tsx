import React, {useState} from "react";
import Select_tabs from "../components/button/select_tabs";
import * as a from '../type/alias'
import Config_ocr from "./config_ocr";

export default function Main_page({
    //
}:{
    //
}){
    let config_name = [
        "OCR" as a.name,
        "Image Processing" as a.name,
        "Bounding Boxes" as a.name,
    ]
    let config_tabs = <Select_tabs
        name_arr={config_name}
        jsx_elements={[
            <Config_ocr/>
        ]}
    />
    let config = <><h1>Advance Setting</h1>{config_tabs}</>
    return <>
    
    </>
}
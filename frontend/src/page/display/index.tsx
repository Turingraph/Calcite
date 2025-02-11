import React, {useEffect, useState} from 'react'
import * as a from '../../type/alias'
import Select_tabs from "../../components/button/select_tabs";
import Display_img from './display_img';
import Display_ocr from './display_ocr';
import Display_boxes from './display_boxes';

export default function Page_display({
    //
}:{
    //
}){
    let right_name = [
        "OCR" as a.name,
        "Boxes" as a.name,
    ]
    let right_tab = <Select_tabs
        name_arr={right_name}
        jsx_elements={[
            <Display_ocr/>,
            <Display_boxes/>
        ]}
    />
    let right_ui = <><h1>Advance Setting</h1>{right_tab}</>

    return <>
    <Display_img/>
    {right_ui}
    </>
}
import React, {useEffect, useState} from 'react'
import * as a from '../../type/alias'
import Select_tabs from "../../components/button/select_tabs";
import Display_img from './display_img';
import Display_ocr from './display_ocr';
import Display_boxes from './display_boxes';

export default function Page_display(){
    const RIGHT_NAME = [
        "OCR" as a.name,
        "Boxes" as a.name,
    ]
    const RIGHT_TAB = <Select_tabs
        name_arr={RIGHT_NAME}
        jsx_elements={[
            <Display_ocr/>,
            <Display_boxes/>
        ]}
    />
    const RIGHT_UI = <><h1>Advance Setting</h1>{RIGHT_TAB}</>

    return <>
    <Display_img/>
    {RIGHT_UI}
    </>
}
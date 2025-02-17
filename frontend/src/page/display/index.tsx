import React, {useEffect, useState} from 'react'
import * as a from '../../type/alias'
import Button_tabs from "../../components/button/button_tabs";
import Display_main_img from './display_main_img';
import Display_ocr from './display_ocr';
import Display_boxes from './display_boxes';
import Display_multi_imgs from './display_multi_img';

export default function Page_display(){
    const RIGHT_NAME = [
        "OCR" as a.name,
        "Boxes" as a.name,
    ]
    const RIGHT_TAB = <Button_tabs
        name_arr={RIGHT_NAME}
        jsx_elements={[
            <Display_ocr/>,
            <Display_boxes/>
        ]}
    />
    const RIGHT_UI = <><h1>Advance Setting</h1>{RIGHT_TAB}</>

    return <>
    <Display_multi_imgs/>
    <Display_main_img/>
    {RIGHT_UI}
    </>
}
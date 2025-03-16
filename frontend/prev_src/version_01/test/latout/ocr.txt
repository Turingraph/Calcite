/* eslint-disable */

import React from "react";
import OCR_SAVE from "../../src/layout/ocr/ocr_save";
import OCR_EDIT from "../../src/layout/ocr/ocr_edit";
import OCR_UI from "../../src/layout/ocr/ocr_ui";
import OSD_UI from "../../src/layout/ocr/osd_ui";
import OCR_OPEN from "../../src/layout/ocr/ocr_open";

export function TEST_OCR_OPEN(){
    return <>
    <OCR_OPEN/>
    </>
}

export function TEST_OCR_SAVE(){
    return <>
    <OCR_SAVE/>
    </>
}

export function TEST_OCR_EDIT(){
    return <>
    <OCR_EDIT/>
    </>
}

export function TEST_OCR_UI(){
    return <>
    <OCR_UI/>
    </>
}

export function TEST_OSD_UI(){
    return <>
    <OSD_UI/>
    </>
}
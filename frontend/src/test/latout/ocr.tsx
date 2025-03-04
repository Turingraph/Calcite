import React from "react";
import * as a from "../../src/type/alias"
import OCR_CONFIG from "../../src/layout/ocr/ocr_config";
import OCR_EDIT from "../../src/layout/ocr/ocr_edit";
import OCR_OBJ from "../../src/layout/ocr/ocr_obj";
import OSD_OBJ from "../../src/layout/ocr/osd_obj";

export function TEST_OCR_CONFIG(){
    return <>
    <OCR_CONFIG/>
    </>
}

export function TEST_OCR_EDIT(){
    return <>
    <OCR_EDIT/>
    </>
}

export function TEST_OCR_OBJ(){
    return <>
    <OCR_OBJ/>
    </>
}

export function TEST_OSD_OBJ(){
    return <>
    <OSD_OBJ/>
    </>
}
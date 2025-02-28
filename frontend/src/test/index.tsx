import { 
    TEST_BUTTON_SAVE,
    TEST_BUTTON_CLICK,  // OK
    TEST_BUTTON_TABS,   // OK
    TEST_BUTTON_HISTORY // OK
} from "./components/button";

import { 
    TEST_OBJ_SELF,       // OK
    TEST_OBJ_STR,        // OK
    TEST_OBJ_BOOL        // OK
} from "./components/obj";

import {
    TEST_INPUT_COMBINE, // OK
    TEST_INPUT_STR,     // OK
} from "./components/input";

import {
    TEST_SEARCH_OBJ,    // OK
    TEST_OPT_EXIST_ARR, // OK
    TEST_OPT_INPUT,     // OK
    TEST_SEARCH_BAR     // OK
} from "./components/opt";

import {
    TEST_FILE_IMPORT,   //
    TEST_FILE_EXPORT    //
} from "./components/file"

import { 
    TEST_BOX_CONFIG,
    TEST_BOX_EDIT,
    TEST_BOX_OBJ
} from "./latout/box";

import { 
    TEST_IMG_CONFIG,
    TEST_IMG_EDIT,
    TEST_IMG_OBJ
} from "./latout/img";

import { 
    TEST_OCR_CONFIG,
    TEST_OCR_EDIT,
    TEST_OCR_OBJ,
    TEST_OSD_OBJ,
} from "./latout/ocr";

import { 
    TEST_PAGE,
    TEST_PAGE_LEFT,
    TEST_PAGE_MIDDLE,
    TEST_PAGE_RIGHT,
} from "./page";

export default function TEST(){
    return <>
    <TEST_FILE_IMPORT/>
    </>
}
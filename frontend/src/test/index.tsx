/* eslint-disable */

import React from "react";

//-------------------------------------------------------------------

import { 
    TEST_BUTTON_CLICK,  // OK
    TEST_BUTTON_TABS,   // OK
    TEST_BUTTON_HISTORY // UNTESTED
} from "./components/button";

import { 
    TEST_OBJ_SELF,       // UNTESTED
    TEST_OBJ_STR,        // UNTESTED
    TEST_OBJ_BOOL        // UNTESTED
} from "./components/obj";

import {
    TEST_INPUT_FORM,    // UNTESTED
    TEST_INPUT_COMBINE, // ...
    TEST_INPUT_STR,     // UNTESTED
} from "./components/input";

import {
    TEST_SEARCH_OBJ,    // UNTESTED
    TEST_OPT_EXIST_ARR, // UNTESTED
    TEST_OPT_INPUT,     // UNTESTED
    TEST_SEARCH_BAR     // UNTESTED
} from "./components/opt";

import {
    TEST_FILE_OPEN,   // UNFINISHED
    TEST_FILE_SAVE    // UNFINISHED
} from "./components/file"

//-------------------------------------------------------------------

import { 
    TEST_BOX_OPEN,      // EMPTY
    TEST_BOX_SAVE,      // EMPTY
    TEST_BOX_EDIT,      // EMPTY
    TEST_BOX_UI         // EMPTY
} from "./latout/box";

import { 
    TEST_IMG_OPEN,      // EMPTY
    TEST_IMG_SAVE,      // EMPTY
    TEST_IMG_EDIT,      // EMPTY
    TEST_IMG_UI         // EMPTY
} from "./latout/img";

import { 
    TEST_OCR_OPEN,      // EMPTY
    TEST_OCR_SAVE,      // EMPTY
    TEST_OCR_EDIT,      // EMPTY
    TEST_OCR_UI,        // EMPTY
    TEST_OSD_UI,        // EMPTY
} from "./latout/ocr";

import { 
    TEST_THEIR_OPEN,    // UNTESTED
    TEST_THEIR_ARR,     // UNTESTED but their_t might be updated in future.
    TEST_THEIR_SAVE     // EMPTY
} from "./latout/their";

//-------------------------------------------------------------------

import { 
    TEST_PAGE,          // EMPTY
} from "./page";

//-------------------------------------------------------------------

export default function TEST(){
    return <>
    <TEST_BUTTON_TABS/>
    </>
}
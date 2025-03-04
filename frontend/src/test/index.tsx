//-------------------------------------------------------------------

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
    TEST_THEIR_OPEN,    // OK
    TEST_THEIR_ARR,     // OK but their_t might be updated in future.
    TEST_THEIR_SAVE     // EMPTY
} from "./latout/their";

//-------------------------------------------------------------------

import { 
    TEST_PAGE,          // EMPTY
} from "./page";

//-------------------------------------------------------------------

export default function TEST(){
    return <>
    <TEST_PAGE/>
    </>
}
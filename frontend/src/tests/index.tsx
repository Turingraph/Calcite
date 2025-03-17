/* eslint-disable */

import React from "react";

//-------------------------------------------------------------------

import { 
    TEST_BUTTON_CLICK,  // OK
    TEST_BUTTON_TABS,   // OK
    TEST_BUTTON_HISTORY // OK
} from "./ui/button";

import { 
    TEST_OBJ_SELF,       // OK
    TEST_OBJ_STR,        // OK
    TEST_OBJ_BOOL        // OK
} from "./ui/obj";

import {
    TEST_INPUT_FORM,    // OK
    TEST_INPUT_COMBINE, // OK
    TEST_INPUT_STR,     // OK
} from "./ui/input";

import {
    TEST_SEARCH_OBJ,    // OK
    TEST_OPT_EXIST_ARR, // OK
    TEST_OPT_INPUT,     // OK
    TEST_SEARCH_BAR     // OK
} from "./ui/opt";

import {
    TEST_FILE_OPEN,   // OK
    TEST_FILE_SAVE    // OK
} from "./ui/file"

//-------------------------------------------------------------------

export default function TESTS(){
    return <>
    <TEST_FILE_SAVE/>
    </>
}
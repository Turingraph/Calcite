import { 
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
    TEST_OPT_EXIST_ARR, // OK
    TEST_OPT_INPUT,     // OK
    TEST_SEARCH_BAR     // OK
} from "./components/opt";

export default function TEST(){
    return <>
    <TEST_SEARCH_BAR/>
    </>
}
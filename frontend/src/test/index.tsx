import { 
    TEST_BUTTON_CLICK,  // FINISH
    TEST_BUTTON_TABS,   // FINISH
    TEST_BUTTON_HISTORY // FINISH
} from "./components/button";

import { 
    TEST_OBJ_SELF,       // FINISH
    TEST_OBJ_STR,        // FINISH
    TEST_OBJ_BOOL        // FINISH
} from "./components/obj";

import {
    TEST_INPUT_COMBINE, // FINISH
    TEST_INPUT_STR,     // FINISH
} from "./components/input";

import { 
    TEST_OPT_EXIST_ARR, // FINISH
    TEST_OPT_INPUT,     // FINISH
    TEST_SEARCH_BAR     // FINISH
} from "./components/opt";

/*
How to solve `Each child in a list should have a unique "key" prop.` ?
*   https://stackoverflow.com/questions/28329382/
    understanding-unique-keys-for-array-children-in-react-js
*/

export default function TEST(){
    return <>
    <TEST_BUTTON_TABS/>
    </>
}
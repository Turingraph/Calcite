import { 
    TEST_BUTTON_CLICK,  // OK
    TEST_BUTTON_TABS,   // OK
    TEST_BUTTON_HISTORY // OK
} from "./components/button";

import { 
    TEST_OBJ_SELF,       // OK
    TEST_OBJ_STR,        // OK
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

import TUTORIAL_USEREDUCER from "../tutorial/react_tutorial/tutorial_usereducer";

/*
How to solve `Each child in a list should have a unique "key" prop.` ?
*   https://stackoverflow.com/questions/28329382/
    understanding-unique-keys-for-array-children-in-react-js
*/

export default function TEST(){
    return <>
    <TEST_OBJ_SELF/>
    </>
}
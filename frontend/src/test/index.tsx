import { 
    Test_button_click,  // FINISH
    Test_button_tabs,   // FINISH
    Test_button_history // FINISH
} from "./components/button";

import { 
    Test_obj_self,       // FINISH
    Test_obj_str,        // FINISH
    Test_obj_bool        // FINISH
} from "./components/obj";

import {
    Test_input_combine, // FINISH
    Test_input_str,     // FINISH
} from "./components/input";

import { 
    Test_opt_exist_arr, // FINISH
    Test_opt_input,     // FINISH
    Test_search_bar     // FINISH
} from "./components/opt";

/*
How to solve `Each child in a list should have a unique "key" prop.` ?
*   https://stackoverflow.com/questions/28329382/
    understanding-unique-keys-for-array-children-in-react-js
*/

export default function Test(){
    return <>
    <Test_button_tabs/>
    </>
}
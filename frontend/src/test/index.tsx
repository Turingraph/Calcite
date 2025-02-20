import React from "react";

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
import Config_boxes from "../page/config/config_boxes";
import Config_img from "../page/config/config_img";
import Config_ocr from "../page/config/config_ocr";
import Page_config from "../page/config";

import Display_boxes from "../page/display/display_boxes";
import Display_img from "../page/display/display_img";
import Display_ocr from "../page/display/display_ocr";
import Page_display from "../page/display";

import Page_multi_imgs from "../page/multi_imgs";
import Page from "../page";
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Test(){
    return <>
    <Test_obj_str/>
    </>
}
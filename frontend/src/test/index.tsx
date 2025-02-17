import React from "react";

import { 
    Test_click_button,  // FINISH
    Test_select_tabs,   // FINISH
    Test_history_button // Maximum update depth exceeded.
} from "./components/button";

import { 
    Test_factory_obj,       // You provided a `checked` prop to a form field without an `onChange` handler.
    Test_factory_opts,      // FINISH
    Test_input_item_attr,   // FINISH
    Test_select_button      // You provided a `checked` prop to a form field without an `onChange` handler. 
} from "./components/factory";

import {
    Test_combine_input, // Maximum update depth exceeded.
    Test_input_str,     // FINISH
    Test_text_area      // FINISH
} from "./components/input";

import { 
    Test_input_opt,     // Maximum update depth exceeded.
    Test_search_bar     // FINISH
} from "./components/search";

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
    <Test_search_bar/>
    </>
}
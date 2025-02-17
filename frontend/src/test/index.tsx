import React from "react";
import {
    Test_combine_input,
    Test_input_str,
    Test_text_area} from "./components/input";
import { Test_input_opt, Test_search_bar } from "./components/search";
import { Test_select_tabs, Test_history_button } from "./components/button";
import { 
    Test_factory_obj,
    Test_factory_opts,
    Test_input_item_attr,
    Test_select_button} from "./components/factory";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default function Test(){
    return <>
    <Config_boxes/>
    </>
}
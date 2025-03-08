import React from "react";
import * as a from "../../type/alias"
import OBJ_SELF from "../../components/obj/obj_self";
import { DEFAULT_BOX } from "../../data/default_edit";
import { num_to_255, num_to_size } from "../../utility/convert";
import { useReducer } from "react";
import act_objarr from "../../array/act_objarr";
import { use_objarr_t } from "../../array/act_objarr";
import INPUT_COMBINE from "../../components/input/input_combine";

export default function BOX_EDIT({
    // complicated attr_value[]
    ss_thresh       = undefined,
    ss_thresh_adp   = undefined,
    ss_blur         = undefined,
    ss_crop         = undefined,
    // simple attr_value[] with "r" and "c"
    ss_erode        = undefined,
    ss_opening      = undefined,
    ss_canny        = undefined,
    ss_dilate       = undefined,
    // useState
    ss_rotate       = undefined,
}:{
    // complicated attr_value[]
    ss_thresh?:     undefined|use_objarr_t<a.attr_value<number>[]>
    ss_thresh_adp?: undefined|use_objarr_t<a.attr_value<number>[]>
    ss_blur?:       undefined|use_objarr_t<a.attr_value<number>[]>
    ss_crop?:       undefined|use_objarr_t<a.attr_value<number>[]>
    // simple attr_value[] with "r" and "c"
    ss_erode?:      undefined|use_objarr_t<a.attr_value<number>[]>
    ss_opening?:    undefined|use_objarr_t<a.attr_value<number>[]>
    ss_canny?:      undefined|use_objarr_t<a.attr_value<number>[]>
    ss_dilate?:     undefined|use_objarr_t<a.attr_value<number>[]>
    // useState
    ss_rotate?:     undefined|a.use_state_t<number>
}){
    return <>
    {ss_thresh 
        ? <INPUT_COMBINE
            opt_name={"Threshold" as a.opt_name}
            input_str={ss_thresh as use_objarr_t<a.attr_value<string | number>[]>}
            // input_opt={}
        />
        :<></>}
    </>
}
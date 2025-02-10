import React, {useState} from "react";
import History_buttons from "../components/button/history_buttons";
import Click_button from "../components/button/click_button";
import Select_tabs from "../components/button/select_tabs";
import * as a from '../type/alias'
import Input_opt from "../components/search/input_opt";
import Factory_opts from "../components/factory/factory_opts";
import { language_opts, psm_opts, oem_opts } from "../data/config";
import Input_str from "../components/input/input_str";
import Input_form from "../components/input/input_form";
import { input_t } from "../type/input";
import Combine_input from "../components/input/combine_input";
import { input_opt_t } from "../type/input";

export default function Config_ocr({
    //
}:{
    //
}){
    const [ss_psm, setss_psm] = useState<number>(1)
    const [ss_oem, setss_oem] = useState<number>(3)
    const [ss_languages, setss_languages] = useState<number[]>([1])
    const [ss_time_out, setss_time_out] = useState<number>(0)
    

    let config_psm:input_opt_t = {
            opt_name: "Page Segmentation Mode (PSM)" as a.opt_name,
            available_opts: psm_opts,
            ss_mode: {ss:ss_psm, setss:setss_psm},
            is_search_bar: false
    }
    let config_oem:input_opt_t = {
        opt_name: "OCR Engine Mode (OEM)" as a.opt_name,
        available_opts: oem_opts,
        ss_mode: {ss:ss_oem, setss:setss_oem},
        is_search_bar: false
    }
    let config_lang = <Factory_opts
    opt_name={"Select Language" as a.opt_name}
    exist_objs={{ss:ss_languages, setss:setss_languages}}
    available_opts={language_opts}
    default_opt={0}
    is_search_bar={true}
    is_duplicate={false}
    />
    let config_time_out:input_t<string|number> = {
        opt_name:"Time out (second)" as a.opt_name,
        input:{ss:ss_time_out, setss:setss_time_out} as a.use_state_t<number|string>,
        default_input:0
    }
    let config_ocr = <Combine_input
        opt_name={"OCR Setting" as a.opt_name}
        input_str={[config_time_out]}
        input_opt={[config_psm, config_oem]}
    />
    return <>
        {config_lang}
        {config_ocr}
    </>
}
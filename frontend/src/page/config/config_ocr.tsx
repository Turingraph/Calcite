import React, {useState} from "react";
import History_buttons from "../../components/button/history_buttons";
import Click_button from "../../components/button/click_button";
import Select_tabs from "../../components/button/select_tabs";
import * as a from '../../type/alias'
import Input_opt from "../../components/search/input_opt";
import Factory_opts from "../../components/factory/factory_opts";
import { LANGUAGE_OPTS, PSM_OPTS, OEM_OPTS } from "../../data/constant";
import Input_str from "../../components/input/input_str";
import Input_form from "../../components/input/input_form";
import Combine_input, {combine_input_uit} from "../../components/input/combine_input";
import { input_opt_uit } from "../../components/search/type";;
import { DEFAULT_OCR } from "../../data/config";

export default function Config_ocr(){
    const [ss_psm, setss_psm] = useState<number>(DEFAULT_OCR.psm)
    const [ss_oem, setss_oem] = useState<number>(DEFAULT_OCR.oem)
    const [ss_languages, setss_languages] = useState<number[]>(DEFAULT_OCR.languages.map((item)=>{return item}))
    const [ss_time_out, setss_time_out] = useState<number>(DEFAULT_OCR.time_out)
    const [ss_filter_char, setss_filter_char] = useState<string>(DEFAULT_OCR.filter_char)
    const [ss_filter_mode, setss_filter_mode] = useState<number>(DEFAULT_OCR.filter_mode)

    const INTERFACE_PSM:input_opt_uit = {
            opt_name: "Page Segmentation Mode (PSM)" as a.opt_name,
            available_opts: PSM_OPTS,
            ss_mode: {ss:ss_psm, setss:setss_psm},
            is_search_bar: false
    }
    const INTERFACE_OEM:input_opt_uit = {
        opt_name: "OCR Engine Mode (OEM)" as a.opt_name,
        available_opts: OEM_OPTS,
        ss_mode: {ss:ss_oem, setss:setss_oem},
        is_search_bar: false
    }
    const INTERFACE_LANG = <Factory_opts
    opt_name={"Select Language" as a.opt_name}
    exist_opts={{ss:ss_languages, setss:setss_languages}}
    available_opts={LANGUAGE_OPTS}
    is_search_bar={true}
    />
    const INTERFACE_TIME_OUT:a.use_state_uit<string|number> = {
        opt_name:"Time out (second)" as a.opt_name,
        ss:ss_time_out, setss:setss_time_out} as a.use_state_uit<number|string>
    const INTERFACE_FILTER_CHAR = <Combine_input
        opt_name={"Filter Character" as a.opt_name}
        input_str={[{
            opt_name:"selected character" as a.opt_name,
            ss:ss_filter_char, 
            setss:setss_filter_char
            } as a.use_state_uit<number|string>
            ]}
        input_opt={[{
            opt_name:"mode" as a.opt_name,
            available_opts:["select those text", "avoid those text"],
            ss_mode:{ss:ss_filter_mode, setss:setss_filter_mode},
            is_search_bar:false
        }]}
    />
    const INTERFACE_OCR = <Combine_input
        opt_name={"OCR Setting" as a.opt_name}
        input_str={[INTERFACE_TIME_OUT]}
        input_opt={[INTERFACE_PSM, INTERFACE_OEM]}
    />
    return <>
        {INTERFACE_LANG}
        {INTERFACE_FILTER_CHAR}
        {INTERFACE_OCR}
    </>
}
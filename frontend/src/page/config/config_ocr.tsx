import React, {useState} from "react";
import Button_history from "../../components/button/button_history";
import Button_click from "../../components/button/button_click";
import Button_tabs from "../../components/button/button_tabs";
import * as a from '../../type/alias'
import Opt_input from "../../components/opt/opt_input";
import Opt_exist_arr from "../../components/opt/opt_exist_arr";
import { LANGUAGE_OPTS, PSM_OPTS, OEM_OPTS } from "../../data/constant";
import Input_str from "../../components/input/input_str";
import Input_form from "../../components/input/input_form";
import Input_combine, {input_combine_uit} from "../../components/input/input_combine";
import { opt_input_uit } from "../../components/opt/type";;
import { DEFAULT_OCR } from "../../data/config";

export default function Config_ocr(){
    const [ss_psm, setss_psm] = useState<number>(DEFAULT_OCR.psm)
    const [ss_oem, setss_oem] = useState<number>(DEFAULT_OCR.oem)
    const [ss_languages, setss_languages] = useState<number[]>(DEFAULT_OCR.languages.map((item)=>{return item}))
    const [ss_time_out, setss_time_out] = useState<number>(DEFAULT_OCR.time_out)
    const [ss_filter_char, setss_filter_char] = useState<string>(DEFAULT_OCR.filter_char)
    const [ss_filter_mode, setss_filter_mode] = useState<number>(DEFAULT_OCR.filter_mode)

    const INTERFACE_PSM:opt_input_uit = {
            opt_name: "Page Segmentation Mode (PSM)" as a.opt_name,
            available_opts: PSM_OPTS,
            ss_mode: {ss:ss_psm, setss:setss_psm},
            is_search_bar: false
    }
    const INTERFACE_OEM:opt_input_uit = {
        opt_name: "OCR Engine Mode (OEM)" as a.opt_name,
        available_opts: OEM_OPTS,
        ss_mode: {ss:ss_oem, setss:setss_oem},
        is_search_bar: false
    }
    const INTERFACE_LANG = <Opt_exist_arr
    opt_name={"Select Language" as a.opt_name}
    exist_opts={{ss:ss_languages, setss:setss_languages}}
    available_opts={LANGUAGE_OPTS}
    is_search_bar={true}
    />
    const INTERFACE_TIME_OUT:a.use_state_uit<string|number> = {
        opt_name:"Time out (second)" as a.opt_name,
        ss:ss_time_out, setss:setss_time_out} as a.use_state_uit<number|string>
    const INTERFACE_FILTER_CHAR = <Input_combine
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
    const INTERFACE_OCR = <Input_combine
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
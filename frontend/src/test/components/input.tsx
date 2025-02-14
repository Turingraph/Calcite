import React, {useState} from "react";
import * as a from '../../type/alias'
import Combine_input from "../../components/input/combine_input";
import { combine_input_uit, input_uit, input_opt_uit } from "../../type/input_ui";
import Input_form, {input_form_t} from "../../components/input/input_form";
import Input_str from "../../components/input/input_str";
import Input_opt from "../../components/search/input_opt";
import Text_area from "../../components/input/text_area";

const DEFAULT_INPUT:(string|number)[] = [
    0.0001,
    1.4142,
    2.7182,
    3.1415,
    "Sir William Rowan Hamilton"
]

const OPT_MEDIA_ARR = ["3B1B", "Khan anademy", "Brilliant", "Shoulder of Giant", "Learn by Doing"]
const OPT_LEVEL = ["Beginner", "Elementary", "Intermediate", "Advance", "Genius"]

export function Test_combine_input(){
    const [ss_i, setss_i] = useState<number>(DEFAULT_INPUT[0] as number)
    const [ss_j, setss_j] = useState<number>(DEFAULT_INPUT[1] as number)
    const [ss_k, setss_k] = useState<number>(DEFAULT_INPUT[2] as number)
    const [ss_r, setss_r] = useState<number>(DEFAULT_INPUT[3] as number)
    const [ss_media, setss_media] = useState<number>(0)
    const [ss_level, setss_level] = useState<number>(0)
    const [ss_scientist, setss_scientist] = useState<string>(DEFAULT_INPUT[4] as string)

    const INTERFACE_INPUT_UIT:input_uit<string|number>[]=[
        {
            opt_name:"Vector's 1st value" as a.opt_name,
            input:{ss:ss_i, setss:setss_i} as a.use_state_t<string|number>,
            default_input:DEFAULT_INPUT[0]
        },
        {
            opt_name:"Vector's 2nd value" as a.opt_name,
            input:{ss:ss_j, setss:setss_j} as a.use_state_t<string|number>,
            default_input:DEFAULT_INPUT[1]
        },
        {
            opt_name:"Vector's 3rd value" as a.opt_name,
            input:{ss:ss_k, setss:setss_k} as a.use_state_t<string|number>,
            default_input:DEFAULT_INPUT[2]
        },
        {
            opt_name:"Vector's 4th value" as a.opt_name,
            input:{ss:ss_r, setss:setss_r} as a.use_state_t<string|number>,
            default_input:DEFAULT_INPUT[3]
        },
        {
            opt_name:"Scientist" as a.opt_name,
            input:{ss:ss_scientist, setss:setss_scientist} as a.use_state_t<string|number>,
            default_input:DEFAULT_INPUT[4]
        }
    ]

    const INTERFACE_INPUT_FORM:input_form_t = {
        opt_name:"4D Vector made by " + ss_scientist as a.opt_name,
        arr:INTERFACE_INPUT_UIT,
        is_undo:true,
        func_activate:(()=>{alert("Alexander Hamilton")}) as a.func_event
    }

    const JSX_INPUT_FORM = Input_form(INTERFACE_INPUT_FORM)

    const INTERFACE_OPT_UIT:input_opt_uit[] = [
        {
            opt_name:"media" as a.opt_name,
            available_opts:OPT_MEDIA_ARR,
            ss_mode:{ss:ss_media, setss:setss_media},
            is_search_bar:false
        },
        {
            opt_name:"level" as a.opt_name,
            available_opts:OPT_LEVEL,
            ss_mode:{ss:ss_level, setss:setss_level},
            is_search_bar:false
        }
    ]
    const INTERFACE_COMBINE_INPUT:combine_input_uit = {
        opt_name:"Vector Space" as a.opt_name,
        input_str:INTERFACE_INPUT_UIT,
        input_opt:INTERFACE_OPT_UIT,
        func_activate:(()=>{console.log("Liminal Vector Space")}) as a.func_event
    }

    const JSX_COMBINE_INPUT = Combine_input(INTERFACE_COMBINE_INPUT)

    return <>
    {/* {JSX_INPUT_FORM} */}
    {JSX_COMBINE_INPUT}
    </>
}

export function Test_input_str(){
    const [ss_song, setss_song] = useState<string>("R.I.P. Duolingo")
    return <>
        <Input_str
            opt_name={"What is your favorite songs ?" as a.opt_name}
            input={{ss:ss_song, setss:setss_song}}
        />
    </>
}

export function Test_text_area(){
    const [ss_song, setss_song] = useState<string>("R.I.P. Duolingo")
    return <>
        <Text_area
            opt_name={"What is your favorite songs ?" as a.opt_name}
            input={{ss:ss_song, setss:setss_song}}
        />
    </>
}
import React, {useState, JSX} from "react";
import * as a from '../../src/type/alias'
import INPUT_COMBINE from "../../src/components/input/input_combine";
import { opt_input_uit } from "../../src/components/opt/type";
import INPUT_FORM from "../../src/components/input/input_form";
import INPUT_STR from "../../src/components/input/input_str";

const DEFAULT_INPUT:(string|number)[] = [
    0.0001,
    1.4142,
    2.7182,
    3.1415,
    "Sir William Rowan Hamilton"
]

const OPT_MEDIA_ARR = ["3B1B", "Khan anademy", "Brilliant", "Shoulder of Giant", "Learn by Doing"]
const OPT_LEVEL = ["Beginner", "Elementary", "Intermediate", "Advance", "Genius"]

export function TEST_INPUT_FORM(){
    const [ss_obj, setss_obj] = useState<a.attr_value<number|string>[]>([
        {name:"Favorite Number No.0 :" as a.name, value:DEFAULT_INPUT[0]},
        {name:"Favorite Number No.1 :" as a.name, value:DEFAULT_INPUT[1]},
        {name:"Favorite Number No.2 :" as a.name, value:DEFAULT_INPUT[2]},
        {name:"Favorite Number No.3 :" as a.name, value:DEFAULT_INPUT[3]},
        {name:"Scientist" as a.name, value:DEFAULT_INPUT[4]},
    ])

    const JSX_INPUT_FORM:JSX.Element = <INPUT_FORM
        opt_name={"Vector Space" as a.opt_name}
        arr={{ss:ss_obj, setss:setss_obj}}
        // func_activate = {(()=>{alert("Alexander Hamilton")}) as a.func_event}
        is_undo={true}
    />
    return <>
    {JSX_INPUT_FORM}
    </>
}

// export function TEST_INPUT_COMBINE(){
//     const [ss_i, setss_i] = useState<number>(DEFAULT_INPUT[0] as number)
//     const [ss_j, setss_j] = useState<number>(DEFAULT_INPUT[1] as number)
//     const [ss_k, setss_k] = useState<number>(DEFAULT_INPUT[2] as number)
//     const [ss_r, setss_r] = useState<number>(DEFAULT_INPUT[3] as number)
//     const [ss_media, setss_media] = useState<number|undefined>(0)
//     const [ss_level, setss_level] = useState<number|undefined>(0)
//     const [ss_scientist, setss_scientist] = useState<string>(DEFAULT_INPUT[4] as string)

//     const INTERFACE_INPUT_UIT_ARR:a.use_state_uit<string|number>[]=[
//         {
//             opt_name:"Vector's 1st value" as a.opt_name,
//             ss:ss_i, setss:setss_i} as a.use_state_uit<string|number>,
//         {
//             opt_name:"Vector's 2nd value" as a.opt_name,
//             ss:ss_j, setss:setss_j} as a.use_state_uit<string|number>,
//         {
//             opt_name:"Vector's 3rd value" as a.opt_name,
//             ss:ss_k, setss:setss_k} as a.use_state_uit<string|number>,
//         {
//             opt_name:"Vector's 4th value" as a.opt_name,
//             ss:ss_r, setss:setss_r} as a.use_state_uit<string|number>,
//         {
//             opt_name:"Scientist" as a.opt_name,
//             ss:ss_scientist, setss:setss_scientist} as a.use_state_uit<string|number>,
//     ]

//     const JSX_INPUT_FORM:JSX.Element = <INPUT_FORM
//         opt_name={"Vector Space" as a.opt_name}
//         arr={INTERFACE_INPUT_UIT_ARR}
//         func_activate = {(()=>{alert("Alexander Hamilton")}) as a.func_event}
//         is_undo={true}
//     />

//     const INTERFACE_OPT_UIT_ARR:opt_input_uit[] = [
//         {
//             opt_name:"media" as a.opt_name,
//             available_opts:OPT_MEDIA_ARR,
//             ss_mode:{ss:ss_media, setss:setss_media},
//             is_search_bar:false
//         },
//         {
//             opt_name:"level" as a.opt_name,
//             available_opts:OPT_LEVEL,
//             ss_mode:{ss:ss_level, setss:setss_level},
//             is_search_bar:false
//         }
//     ]
//     const JSX_COMBINE_INPUT:JSX.Element = <INPUT_COMBINE
//         opt_name={"Vector Space" as a.opt_name}
//         input_str={INTERFACE_INPUT_UIT_ARR}
//         input_opt={INTERFACE_OPT_UIT_ARR}
//         func_activate={(()=>{console.log("Liminal Vector Space")}) as a.func_event}
//         />

//     return <>
//     {/* {JSX_INPUT_FORM} */}
//     {JSX_COMBINE_INPUT}
//     </>
// }

export function TEST_INPUT_STR(){
    const [ss_song, setss_song] = useState<string>("R.I.P. Duolingo")
    return <>
        <INPUT_STR
            opt_name={"What is your favorite songs ?" as a.opt_name}
            input={{ss:ss_song, setss:setss_song}}
        />
    </>
}
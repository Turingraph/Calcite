import React, { JSX, useReducer, useState } from "react";
import act_arrobj, { ss_arrobj_t } from "../../ui/array/act_arrobj";
import INPUT_COMBINE from "../../ui/components/input/input_combine";
import INPUT_FORM from "../../ui/components/input/input_form";
import INPUT_STR from "../../ui/components/input/input_str";
import * as a from '../../ui/type/alias';

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
    const [ss_obj, setss_obj] = useReducer(
        act_arrobj,
        {ss:[
            {attr:"Favorite Number No.0" as a.attr, value:DEFAULT_INPUT[0]},
            {attr:"Favorite Number No.1" as a.attr, value:DEFAULT_INPUT[1]},
            {attr:"Favorite Number No.2" as a.attr, value:DEFAULT_INPUT[2]},
            {attr:"Media" as a.attr, value:0},
            {attr:"Mode" as a.attr, value:0},
            {attr:"Favorite Number No.3" as a.attr, value:DEFAULT_INPUT[3]},
            {attr:"Scientist" as a.attr, value:DEFAULT_INPUT[4]},
        ] as a.attr_value<number|string>[]} as ss_arrobj_t<a.attr_value<number|string>[], keyof a.attr_value<number|string>>
    )
    const JSX_INPUT_FORM:JSX.Element = <INPUT_FORM
        opt_name={"Vector Space" as a.opt_name}
        input_arr={{ss:ss_obj, setss:setss_obj}}
        no_input_fields={["Media", "Mode"]}
        is_undo={true}
    />
    return <>
    {JSX_INPUT_FORM}
    </>
}

export function TEST_INPUT_COMBINE(){
    const [ss_obj, setss_obj] = useReducer(
        act_arrobj,
        {ss:[
            {attr:"Favorite Number No.0" as a.attr, value:DEFAULT_INPUT[0]},
            {attr:"Favorite Number No.1" as a.attr, value:DEFAULT_INPUT[1]},
            {attr:"Favorite Number No.2" as a.attr, value:DEFAULT_INPUT[2]},
            {attr:"Media" as a.attr, value:0},
            {attr:"Mode" as a.attr, value:0},
            {attr:"Favorite Number No.3" as a.attr, value:DEFAULT_INPUT[3]},
            {attr:"Scientist" as a.attr, value:DEFAULT_INPUT[4]},
        ] as a.attr_value<number|string>[]} as ss_arrobj_t<a.attr_value<number|string>[], keyof a.attr_value<number|string>>
    )
    const JSX_INPUT_FORM:JSX.Element = <INPUT_COMBINE
        opt_name={"Vector Space" as a.opt_name}
        input_str={{ss:ss_obj, setss:setss_obj}}
        input_opt={[
            {attr:"Media" as a.attr, value:OPT_MEDIA_ARR}, 
            {attr:"Mode" as a.attr, value:OPT_LEVEL}
        ]}
        is_undo={true}
    />
    return <>
    {JSX_INPUT_FORM}
    </>
}

export function TEST_INPUT_STR(){
    const [ss_song, setss_song] = useState<string>("R.I.P. Duolingo")
    return <>
        <INPUT_STR
            opt_name={"What is your favorite songs ?" as a.opt_name}
            input={{ss:ss_song, setss:setss_song}}
        />
    </>
}
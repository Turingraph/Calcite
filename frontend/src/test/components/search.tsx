import React, {useState} from "react";
import * as a from '../../type/alias'
import Input_opt from "../../components/search/input_opt";

const OPT_LEVEL = ["Beginner", "Elementary", "Intermediate", "Advance", "Genius"]

export function Test_input_opt(){
    const [ss_level, setss_level] = useState<number>(0)

    return <>
    <Input_opt
        opt_name={"Level is " + OPT_LEVEL[ss_level] as a.opt_name}
        available_opts={OPT_LEVEL}
        ss_mode={{ss:ss_level, setss:setss_level}}
        is_search_bar = {false}
    />
    </>
}
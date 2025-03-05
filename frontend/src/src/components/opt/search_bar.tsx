import {useState, useEffect} from "react";
import * as a from "../../type/alias"
import INPUT_STR from "../input/input_str";
import { opt_mode_uit } from "./type";
import "./index.css"
import { str_to_optmode_arr } from "../../utility/convert";

// How to make function accept prop based on attr
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// Do not use `ref` and `key` as prop name.
// https://legacy.reactjs.org/warnings/special-props.html

export default function SEARCH_BAR<t extends {name:a.name}>(
{
    opt_name = undefined,
    read_only_arr,
    setss_select_arr,
}:{
    opt_name?:a.opt_name,
    read_only_arr:(t|string)[],
    setss_select_arr:a.setss_t<opt_mode_uit[]>
}){
    const [ss_search_text, setss_search_text] = useState<string>("")

    // Update ss_select_arr such that it match with the ss_search_text
    // https://stackoverflow.com/questions/59467758/
    // passing-array-to-useeffect-dependency-list
    // React Hook useEffect has a missing dependency: 'read_only_arr'.
    // In order to prevent the unexpected behavior, do not edit read_only_arr in search_bar.tsx.
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(()=>{
        const UPDATE_SEARCH_TEXT = str_to_optmode_arr(read_only_arr).map((item,index) => {
            if ((item.name as string).includes(ss_search_text) === true){
                return {
                    name:item.name as string as a.name,
                    index:item.index
                }
            }
            return undefined
        }) as opt_mode_uit[]
        setss_select_arr(UPDATE_SEARCH_TEXT)
    },[ss_search_text, setss_select_arr, JSON.stringify(read_only_arr)])
    /* eslint-disable react-hooks/exhaustive-deps */

    return (<>
        <INPUT_STR
            opt_name={opt_name}
            input = {{
                ss: ss_search_text,
                setss: setss_search_text
            } as a.use_state_t<string>}
        />
    </>)
}

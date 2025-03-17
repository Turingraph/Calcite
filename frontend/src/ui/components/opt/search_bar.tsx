import React, { useEffect, useState } from "react";
import { setss_arrobj_t } from "../../array/act_arrobj";
import { arr_to_opt } from "../../convert/arr";
import * as a from "../../type/alias";
import INPUT_STR from "../input/input_str";
import "./index.css";

// How to make function accept prop based on attr
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// Do not use `ref` and `key` as prop name.
// https://legacy.reactjs.org/warnings/special-props.html

export default function SEARCH_BAR<t extends {[x: string]: unknown}>(
{
    opt_name = undefined,
    read_only_arr,
    setss_select_arr,
}:{
    opt_name?:a.opt_name,
    read_only_arr:(t|string)[],
    setss_select_arr:setss_arrobj_t<a.attr_value<number>[], keyof a.attr_value<number>>
}){
    const [ss_search_text, setss_search_text] = useState<string>("")

    // Update ss_select_arr such that it match with the ss_search_text
    // https://stackoverflow.com/questions/59467758/
    // passing-array-to-useeffect-dependency-list
    // React Hook useEffect has a missing dependency: 'read_only_arr'.
    // In order to prevent the unexpected behavior, do not edit read_only_arr in search_bar.tsx.

    useEffect(()=>{
        const UPDATE_SEARCH_TEXT = arr_to_opt(read_only_arr).map((item) => {
            if ((item.attr as string).includes(ss_search_text) === true){
                return {
                    attr:item.attr as string as a.attr,
                    value:item.value
                }
            }
            return undefined
        }) as a.attr_value<number>[]
        setss_select_arr({
            type:"SET",
            input:UPDATE_SEARCH_TEXT
        })
        setss_select_arr({
            type:"SORT",
            sort_attr:"attr",
            sort_mode:"SORT"
        })
    },[ss_search_text, setss_select_arr, JSON.stringify(read_only_arr)])

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

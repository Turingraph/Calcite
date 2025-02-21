import { useEffect, useState, useRef } from "react";
import * as a from "../../type/alias"
import INPUT_STR from "../input/input_str";
import { opt_mode_uit } from "./type";
import "./index.css"

// How to make function accept prop based on attr
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// Do not use `ref` and `key` as prop name.
// https://legacy.reactjs.org/warnings/special-props.html

export default function SEARCH_BAR<t extends object, k extends keyof t>(
{
    opt_name = undefined,
    read_only_arr,
    select_arr,
    attr
}:{
    opt_name?:a.opt_name,
    read_only_arr:t[],
    select_arr:a.use_state_t<opt_mode_uit[]>
    attr:k
}){
    const [ss_search_text, setss_search_text] = useState<string>("")
    const ss_read_only_arr = useRef(read_only_arr)
    const ss_attr = useRef(attr)
    useEffect(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
        const UPDATE_SEARCH_TEXT = ss_read_only_arr.current.map((item,index) => {
                if ((item[ss_attr.current] as string).includes(ss_search_text) === true){
                    return {
                        name:item[ss_attr.current] as string as a.name,
                        index:index
                    }
                }
                return undefined
            }) as opt_mode_uit[]
        select_arr.setss(UPDATE_SEARCH_TEXT)
    },[ss_search_text])

    return (<>
        <INPUT_STR
            opt_name={opt_name}
            input = {{
                ss: ss_search_text,
                setss: setss_search_text
            } as unknown as a.use_state_t<string>}
        />
    </>)
}

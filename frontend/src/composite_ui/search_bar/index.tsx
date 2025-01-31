import React, { JSX, useEffect, useState } from "react";
import search_bar_type from "./type";
import Str_input from "../../basic_ui/str_input";

export default function Search_bar(
{
    title = undefined,
    ss_array,
    setss_show_array
}:search_bar_type
){
    const [ss_input, setss_input] = useState<string>("");
    useEffect(()=>{
        if (ss_input != "")
        {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            let match_array = ss_array.filter((i) => i.includes(ss_input) == true)
            setss_show_array(match_array);
        }
    },[ss_input])

    return (<>
        <Str_input
            title={title}
            ss_input={ss_input}
            setss_input={setss_input}
        />
    </>)
}

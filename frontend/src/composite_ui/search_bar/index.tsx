import React, { JSX, useEffect, useState } from "react";
import search_bar_t from "./type";
import Str_input from "../../basic_ui/str_input";

export default function Search_bar<t extends {title:string}>(
{
    title = undefined,
    arr,
    reading_arr
}:search_bar_t<t>
){
    const [ss_input, setss_input] = useState<string>("");
    useEffect(()=>{
        if (ss_input != "")
        {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
            let read_arr = arr.filter((i) => i.title.includes(ss_input) == true)
            reading_arr(read_arr);
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

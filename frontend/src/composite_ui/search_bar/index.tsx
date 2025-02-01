import React, { JSX, useEffect, useState } from "react";
import search_bar_type from "./type";
import Str_input from "../../basic_ui/str_input";

export default function Search_bar<type extends {title:string}>(
{
    title = undefined,
    array,
    reading_array
}:search_bar_type<type>
){
    const [ss_input, setss_input] = useState<string>("");
    useEffect(()=>{
        if (ss_input != "")
        {
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            let read_array = array.filter((i) => i.title.includes(ss_input) == true)
            reading_array(read_array);
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

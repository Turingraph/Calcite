import React from "react";
import State_button from "../ui/click_button";
import link_list_t from "../../../prev_types/data/link_list_t";
import link_item_t from "../../../prev_types/data/link_item_t";

export default function History_button<t>({
    components,
    length,
    index
}:link_list_t<t>
){
    let jsx_next_button = <State_button title="<=" input_func={()=>{next_func}}/>
    let jsx_prev_button = <State_button title="=>" input_func={()=>{next_func}}/>
    return <>
        //
    </>
}
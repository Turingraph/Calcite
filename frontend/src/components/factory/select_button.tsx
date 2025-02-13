import React, {JSX, useState} from "react";
import * as a from "../../type/alias";
import { func_update_item } from "../../utils/crud_arr";
import Click_button from "../button/click_button";

export default function Select_button<t extends {select:a.select}>({
    name = "select" as a.name,
    arr,
    index
}:{
    name?:a.name
    arr:a.use_state_t<t[]>,
    index:number
}){
    function func_select(index:number){
        let update_input = arr.ss[index]
        update_input.select
            ?update_input.select = false as a.select 
            :update_input.select = true as a.select
        func_update_item(index, arr, update_input)
    }
    return <>
    <Click_button 
        name={name as a.name} 
        func_event={(()=>{func_select(index)}) as a.func_event}
    />
    </>
}
import React, { JSX, useState } from "react";
import ok_no_button_type from "./type";
import state_button_type from "../../basic_ui/state_button/type";
import State_button from "../../basic_ui/state_button";

export default function Ok_no_button<type extends object>(
{
    current_value,
    update_value,
    update_func
}:ok_no_button_type<type>
){
    const yes:JSX.Element = <State_button
        title = "yes"
        update_value={update_value}
        update_func={update_func}
    />
    const no:JSX.Element = <State_button
        title = "no"
        update_value={current_value}
        update_func={update_func}
    />
    return (<>
        {yes}
        {no}
    </>)
}
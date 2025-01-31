import React from "react";
import ok_no_button_type from "./type";
import State_button from "../../basic_ui/state_button";

export default function ok_no_button_type<type>(
{
    ok_title = "yes",                   
    no_title = "no" ,                
    ok_ss_effect     ,  
    no_ss_effect     ,  
    setss_effect     ,            
}:ok_no_button_type<type>
){
    return <>
        <State_button 
            title={ok_title}
            ss_effect={ok_ss_effect}
            setss_effect={setss_effect}
        />
        <State_button 
            title={no_title}
            ss_effect={no_ss_effect}
            setss_effect={setss_effect}
        />
    </>
}
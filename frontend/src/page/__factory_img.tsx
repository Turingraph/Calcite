import React, {useState} from "react";
import * as a from "../type/alias"
import Factory_obj from "../components/factory/factory_obj";
import Select_button from "../components/button/select_button";
import History_buttons from "../components/button/history_buttons";
import Click_button, {click_button_t} from "../components/button/click_button";
import { Opt_to_jsx_arr } from "../utils/convert";

export default function Factory_img({
    //
}:{
    //
}){
    let button_arr:click_button_t[] = [
        {
            name:"open folder" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"open image" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"save" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"reset image" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"activate image processing" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"activate ocr" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"activate dilate image processing" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"select all images" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"unselect all image" as a.name,
            func_event:(()=>{}) as a.func_event
        },
        {
            name:"help" as a.name,
            func_event:(()=>{}) as a.func_event
        },
    ]
    let jsx_button_arr = Opt_to_jsx_arr({arr:button_arr,jsx_element:Click_button})
    return <>
        {jsx_button_arr}
    </>
}
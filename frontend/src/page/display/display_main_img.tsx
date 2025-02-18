import React, {useEffect, useState} from 'react'
import * as a from '../../type/alias'
import { button_click_t } from '../../components/button/button_click'
import Button_click from '../../components/button/button_click'
import { Opt_to_jsx_arr } from '../../function/convert'
import Panel from '../../components/asset/panel'

export default function Display_main_img(){
        const INTERFACE_BUTTON_ARR:button_click_t[]=[
            {
                name:"+" as a.name,
                func_event:(()=>undefined) as a.func_event
            },
            {
                name:"-" as a.name,
                func_event:(()=>undefined) as a.func_event
            },
            {
                name:"original image" as a.name,
                func_event:(()=>undefined) as a.func_event
            },
            {
                name:"gray image" as a.name,
                func_event:(()=>undefined) as a.func_event
            },
            {
                name:"this image" as a.name,
                func_event:(()=>undefined) as a.func_event
            },
            {
                name:"dilate image" as a.name,
                func_event:(()=>undefined) as a.func_event
            },
        ]
    const JSX_BUTTON_ARR = Opt_to_jsx_arr({
        arr:INTERFACE_BUTTON_ARR,
        jsx_element:Button_click
    })
    return <>
        {JSX_BUTTON_ARR}
        <Panel jsx_element={<h1>I will insert the image later.</h1>}/>
    </>
}
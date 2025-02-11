import React, {useEffect, useState} from 'react'
import * as a from '../../type/alias'
import { click_button_t } from '../../components/button/click_button'
import Click_button from '../../components/button/click_button'
import { Opt_to_jsx_arr } from '../../utils/convert'
import Panel from '../../components/asset/panel'

export default function Display_img({
    //
}:{
    //
}){
        let interface_button_arr:click_button_t[]=[
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
    let jsx_button_arr = Opt_to_jsx_arr({
        arr:interface_button_arr,
        jsx_element:Click_button
    })
    return <>
        {jsx_button_arr}
        <Panel jsx_element={<h1>I will insert the image later.</h1>}/>
    </>
}
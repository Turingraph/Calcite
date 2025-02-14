import React, {useEffect, useState} from 'react'
import * as a from '../type/alias'
import Page_config from './config'
import Page_display from './display'
import Page_multi_imgs from './multi_imgs'
import Close_panel from '../components/asset/close_panel'
import Click_button from '../components/button/click_button'

export default function Page(){
    return <>
    <Close_panel name={"advanced setting" as a.name} jsx_element={<Page_config/>}/>
    <Page_multi_imgs/>
    <Page_display/>=
    </>
}
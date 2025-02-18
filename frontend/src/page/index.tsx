import React, {useEffect, useState} from 'react'
import * as a from '../type/alias'
import Page_config from './config'
import Page_display from './display'
import Close_panel from '../components/asset/close_panel'

export default function Page(){
    return <>
    <Close_panel name={"advanced setting" as a.name} jsx_element={<Page_config/>}/>
    <Page_display/>
    </>
}
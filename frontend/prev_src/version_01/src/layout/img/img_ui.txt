/* eslint-disable */
import React, { useState } from "react";
import * as a from "../../type/alias"
import { their_t } from "../../type/obj";
import BUTTON_TABS from "../../components/button/button_tabs";

export default function IMG_UI({
    select_img
}:{
    select_img:their_t|undefined
}){
    const IMG_ATTR:("img"|"origin")[] = ["img", "origin"]
    const JSX_IMG = IMG_ATTR.map((item)=>{
        return <>
        <img
            src={select_img? select_img[item]: undefined}
        />
        </>
    })
    const JSX_BODY = <BUTTON_TABS
        jsx_elements={JSX_IMG}
        name_arr={IMG_ATTR as a.name[]}
        />
    return <>
        {JSX_BODY}
    </>
}
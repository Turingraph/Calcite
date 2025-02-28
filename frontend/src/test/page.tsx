import React from "react";
import * as a from "../type/alias"
import PAGE from "../page/page";
import PAGE_LEFT from "../page/page_left";
import PAGE_MIDDLE from "../page/page_middle";
import PAGE_RIGHT from "../page/page_right";

export function TEST_PAGE(){
    return <>
    <PAGE/>
    </>
}

export function TEST_PAGE_LEFT(){
    return <>
    <PAGE_LEFT/>
    </>
}

export function TEST_PAGE_MIDDLE(){
    return <>
    <PAGE_MIDDLE/>
    </>
}

export function TEST_PAGE_RIGHT(){
    return <>
    <PAGE_RIGHT/>
    </>
}
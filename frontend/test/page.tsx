import React from "react";
import * as a from "../src/type/alias"
import PAGE from "../src/page/page";
import PAGE_LEFT from "../src/page/page_left";
import PAGE_MIDDLE from "../src/page/page_middle";
import PAGE_RIGHT from "../src/page/page_right";

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
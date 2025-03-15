"use client"
import CLOSE_PANEL from "../../src/ui/components/asset/close_panel";
import * as a from '../../src/ui/type/alias';

export function TEST_CLOSE_PANEL(){
    return <>
    <CLOSE_PANEL 
        name={"Jotaro" as a.name} 
        jsx_element={<h1>Star Platinum</h1>}
    />
    </>
}
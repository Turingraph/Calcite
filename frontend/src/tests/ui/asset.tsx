import React from 'react';
import CLOSE_PANEL from '../../ui/components/asset/close_panel';
import * as a from '../../ui/type/alias';

export function TEST_CLOSE_PANEL(){
    return <>
    <CLOSE_PANEL 
        name={"Jotaro" as a.name} 
        jsx_element={<h1>Star Platinum</h1>}
    />
    </>
}
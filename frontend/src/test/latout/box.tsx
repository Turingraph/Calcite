import React from "react";
import * as a from "../../src/type/alias"
import BOX_CONFIG from "../../src/layout/box/box_config";
import BOX_EDIT from "../../src/layout/box/box_edit";
import BOX_OBJ from "../../src/layout/box/box_obj";

export function TEST_BOX_CONFIG(){
    return <>
    <BOX_CONFIG/>
    </>
}

export function TEST_BOX_EDIT(){
    return <>
    <BOX_EDIT/>
    </>
}

export function TEST_BOX_OBJ(){
    return <>
    <BOX_OBJ/>
    </>
}
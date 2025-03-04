import React, {useState} from "react";
import * as a from "../../src/type/alias"
import { img_t } from "../../src/type/obj";
import THEIR_ARR from "../../src/layout/their/their_arr";
import THEIR_SAVE from "../../src/layout/their/their_save";
import FILE_OPEN from "../../src/components/file/file_open";
import THEIR_OPEN from "../../src/layout/their/their_open";

export function TEST_THEIR_OPEN(){
    const [ss_arr, setss_arr] = useState<img_t[]>([])
    return <>
    <THEIR_OPEN
        setss_arr={setss_arr}
    />
    </>
}

export function TEST_THEIR_SAVE(){
    return <>
    <THEIR_SAVE/>
    </>
}

export function TEST_THEIR_ARR(){
    return <>
    <THEIR_ARR/>
    </>
}
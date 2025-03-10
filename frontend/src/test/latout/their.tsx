import React, {useState} from "react";
import { their_t } from "../../src/type/obj";
import THEIR_ARR from "../../src/layout/their/their_arr";
import THEIR_SAVE from "../../src/layout/their/their_save";
// import FILE_OPEN from "../../src/components/file/file_open";
import THEIR_OPEN from "../../src/layout/their/their_open";

export function TEST_THEIR_OPEN(){
    // eslint-disable-next-line 
    const [ss_arr, setss_arr] = useState<their_t[]>([])
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
    const [ss_arr, setss_arr] = useState<their_t[]>([])
    // eslint-disable-next-line 
    const [ss_select_obj, setss_select_obj] = useState<number>(0)
    return <>
    <THEIR_OPEN
        setss_arr={setss_arr}
    />
    <THEIR_ARR
        ss_arr={{ss:ss_arr, setss: setss_arr}}
        setss_select={setss_select_obj}
    />
    </>
}
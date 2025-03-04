import React, {useState} from "react";
import * as a from "../../src/type/alias"
import THEIR_ARR from "../../src/layout/their/their_arr";
import THEIR_SAVE from "../../src/layout/their/their_save";
import FILE_OPEN from "../../src/components/file/file_open";
import THEIR_OPEN from "../../src/layout/their/their_open";

export function TEST_THEIR_OPEN(){
    return <>
    <THEIR_OPEN/>
    </>
}

export function TEST_THEIR_SAVE(){
    return <>
    <THEIR_SAVE/>
    </>
}

export function TEST_THEIR_ARR(){
    const [ss_arr, setss_arr] = useState<File[]>([])
    return <>
    <FILE_OPEN
        arr={{ss:ss_arr, setss:setss_arr}}
        multiple={true}
    />
    <THEIR_ARR/>
    </>
}
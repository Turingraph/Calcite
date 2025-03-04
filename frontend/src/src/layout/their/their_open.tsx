import React, { useState, useEffect, useLayoutEffect } from "react";
import * as a from "../../type/alias"
import * as uarr from "../../utility/utility_arr"
import FILE_OPEN from "../../components/file/file_open";
import { their_t } from "../../type/obj";

export default function THEIR_OPEN({
    setss_arr
}:{
    setss_arr:a.setss_t<their_t[]>
}){
    const [ss_files, setss_files] = useState<File[]>([])
    useLayoutEffect(()=>{
        let update_arr = ss_files.map((item)=>{
            return {
                name: item.name as a.name,
                img: item,
                origin: item,
                ocr: "",
                osd: ""
            } as their_t
        })
        update_arr = uarr.sort_arr_name(update_arr, "SORT")
        setss_arr(update_arr)
    }, [ss_files, setss_arr])
    return <>
    <FILE_OPEN
        setss_files={setss_files}
        multiple={true}
    />
    </>
}
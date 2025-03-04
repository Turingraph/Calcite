import React, { useState, useEffect } from "react";
import * as a from "../../type/alias"
import FILE_OPEN from "../../components/file/file_open";
import { img_t } from "../../type/obj";

export default function THEIR_OPEN({
    setss_arr
}:{
    setss_arr:a.setss_t<img_t[]>
}){
    const [ss_files, setss_files] = useState<File[]>([])
    useEffect(()=>{
        const UPDATE_ARR = ss_files.map((item)=>{
            return {
                name: item.name as a.name,
                img: item,
                origin: item,
                ocr: "",
                osd: ""
            } as img_t
        })
        setss_arr(UPDATE_ARR)
    }, [ss_files])
    return <>
    <FILE_OPEN
        setss_files={setss_files}
        multiple={true}
    />
    </>
}
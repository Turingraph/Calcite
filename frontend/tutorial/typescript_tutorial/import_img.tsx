"use client"
import Image from "next/image";
import React, { useReducer } from "react";
import act_arr, { ss_arr_t } from "../../src/ui/array/act_arr";
import FILE_OPEN from "../../src/ui/components/file/file_open";
import { file_to_url } from "../../src/ui/convert/file";

// https://stackoverflow.com/questions/54149972/
// convert-file-object-to-img-angular

export default function IMPORT_IMG(){
    const [ss_file, setss_file] = useReducer(
        act_arr,
        {ss:[] as File[]} as ss_arr_t<File>)
    const JSX_ARR = ss_file.ss.map((item,index)=>{
        return <div key={index}>
            <Image alt="input_image" src={file_to_url(item)}/>
            <hr/>
        </div>
    })
    return <>
    <FILE_OPEN
        setss_files={setss_file}
        multiple={true}
    />
    {JSX_ARR}
    </>
}
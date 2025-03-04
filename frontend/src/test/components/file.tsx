import {useEffect, useState} from "react";
import FILE_SAVE from "../../src/components/file/file_save";
import FILE_OPEN from "../../src/components/file/file_open";
import PANEL from "../../src/components/asset/panel";
import { file_to_date, url_to_file } from "../../src/utility/convert";

/*
TODONOW
1.  Make FILE_EXPORT able to upload multiple file as zip.
2.  able to set ss_arr as url_to_file which is async.
3.  start doing layout/
*/

const MY_URL = "http://localhost:3000/data/box.csv"

export function TEST_FILE_OPEN(){
    const [ss_arr, setss_arr] = useState<File[]>([])
    const JSX_ARR = ss_arr.map((item,index)=>{
        const DAY = file_to_date(item)
        return <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>{DAY}</h1>
            <hr/>
            </div>
    })
    return <>
    <FILE_OPEN
        arr={{ss:ss_arr, setss:setss_arr}}
        multiple={true}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    <FILE_SAVE
        arr={{ss:ss_arr, setss:setss_arr}}
        multiple={true}
    />
    </>
}

export function TEST_FILE_SAVE(){
    const [ss_arr, setss_arr] = useState<File[]>([])
    // useEffect(()=>{async (MY_URL: string)=>{
    //     const DATA = await url_to_file(MY_URL)
    //     setss_arr(DATA ? [DATA] : [])
    // }})
    return <>
    <FILE_SAVE
        arr={{ss:ss_arr, setss:setss_arr}}
    />
    </>
}

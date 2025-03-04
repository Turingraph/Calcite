import {useEffect, useState} from "react";
import SAVE_EXPORT from "../../src/components/save/save_export";
import SAVE_IMPORT from "../../src/components/save/save_import";
import PANEL from "../../src/components/asset/panel";
import { file_to_date, url_to_file } from "../../src/utility/convert";

/*
TODONOW
1.  Make FILE_EXPORT able to upload multiple file as zip.
2.  able to set ss_arr as url_to_file which is async.
3.  start doing layout/
*/

const MY_URL = "http://localhost:3000/data/box.csv"

export function TEST_SAVE_IMPORT(){
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
    <SAVE_IMPORT
        arr={{ss:ss_arr, setss:setss_arr}}
        multiple={true}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    <SAVE_EXPORT
        arr={{ss:ss_arr, setss:setss_arr}}
        multiple={true}
    />
    </>
}

export function TEST_SAVE_EXPORT(){
    const [ss_arr, setss_arr] = useState<File[]>([])
    // useEffect(()=>{async (MY_URL: string)=>{
    //     const DATA = await url_to_file(MY_URL)
    //     setss_arr(DATA ? [DATA] : [])
    // }})
    return <>
    <SAVE_EXPORT
        arr={{ss:ss_arr, setss:setss_arr}}
    />
    </>
}

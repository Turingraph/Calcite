import {useEffect, useState} from "react";
import FILE_EXPORT from "../../components/file/file_export";
import FILE_IMPORT from "../../components/file/file_import";
import PANEL from "../../components/asset/panel";
import { file_to_date, url_to_file } from "../../utility/convert";

/*
TODONOW
1.  Make FILE_IMPORT able to upload multiple file as zip.
2.  able to set ss_file as url_to_file which is async.
3.  start doing layout/
*/

const MY_URL = "http://localhost:3000/data/box.csv"

export function TEST_FILE_IMPORT(){
    const [ss_file, setss_file] = useState<File[]>([])
    const JSX_ARR = ss_file.map((item,index)=>{
        const DAY = file_to_date(item)
        return <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>{DAY}</h1>
            <hr/>
            </div>
    })
    return <>
    <FILE_IMPORT
        file_arr={{ss:ss_file, setss:setss_file}}
        multiple={true}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    <FILE_EXPORT
        file_arr={{ss:ss_file, setss:setss_file}}
        multiple={true}
    />
    </>
}

export function TEST_FILE_EXPORT(){
    const [ss_file, setss_file] = useState<File[]>([])
    // useEffect(()=>{async (MY_URL: string)=>{
    //     const DATA = await url_to_file(MY_URL)
    //     setss_file(DATA ? [DATA] : [])
    // }})
    return <>
    <FILE_EXPORT
        file_arr={{ss:ss_file, setss:setss_file}}
    />
    </>
}

import React, { useReducer, useState } from "react";
import act_arr from "../../src/array/act_arr";
import PANEL from "../../src/components/asset/panel";
import FILE_OPEN from "../../src/components/file/file_open";
import FILE_SAVE from "../../src/components/file/file_save";
import { file_to_date } from "../../src/convert/date";

/*
TO DO LIST
1.  Make FILE_EXPORT able to upload multiple file as zip.
2.  able to set ss_files as url_to_file which is async.
3.  start doing layout/
*/

export function TEST_FILE_OPEN(){
    const [ss_files, setss_files] = useReducer(
        act_arr,
        [] as File[])
    const JSX_ARR = ss_files.map((item,index)=>{
        const DAY = file_to_date(item)
        return <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>{DAY}</h1>
            <hr/>
            </div>
    })
    return <>
    <FILE_OPEN
        setss_files={setss_files}
        multiple={true}
    />
    <PANEL jsx_element={<>{JSX_ARR}</>}/>
    <FILE_SAVE
        files={ss_files}
        multiple={true}
    />
    </>
}

export function TEST_FILE_SAVE(){
    // eslint-disable-next-line 
    const [ss_files, setss_files] = useState<File[]>([])
    // useEffect(()=>{async (MY_URL: string)=>{
    //     const DATA = await url_to_file(MY_URL)
    //     setss_files(DATA ? [DATA] : [])
    // }})
    return <>
    <FILE_SAVE
        files={ss_files}
    />
    </>
}
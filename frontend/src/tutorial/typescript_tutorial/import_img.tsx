import React, {useReducer} from "react";
import FILE_OPEN from "../../src/components/file/file_open";
import { file_to_url } from "../../src/convert/file";
import act_arr from "../../src/array/act_arr";

// https://stackoverflow.com/questions/54149972/
// convert-file-object-to-img-angular

export default function IMPORT_IMG(){
    const [ss_file, setss_file] = useReducer(
        act_arr,
        [] as File[])
    const JSX_ARR = ss_file.map((item,index)=>{
        return <div key={index}>
            <img src={file_to_url(item)}/>
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
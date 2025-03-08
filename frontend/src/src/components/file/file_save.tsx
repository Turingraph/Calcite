import React, { useEffect } from "react";
import JSZip from 'jszip';
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click";
import { file_to_date, file_to_url } from "../../utility/convert";
// import { use_arr_t } from "../../use_reducer/act_arr";

// export async function JSZIP(){
//     const zip = new JSZip();

//     zip.file("Hello.txt", "Hello World\n");

//     const ARCHIVE = await zip.generateAsync({type:"blob"})

//     return new Response(ARCHIVE,{
//     status:200,
//     headers:{
//         "Content-Type":"application/zip"
//     }})
// }

export default function FILE_SAVE({
    files,
    folder_name=undefined,
    multiple=false
}:{
    files:File[]//use_arr_t<File>
    folder_name?:string|undefined
    multiple?:boolean
}){
    // useEffect(()=>{
    //     console.log("FILE_EXPORT : JSZIP :",JSZIP())
    // })
    const func_event = () =>{
        let let_folder_name = folder_name
        if(let_folder_name === undefined){
            let_folder_name = "upload_file_" + file_to_date() + ".zip"
        }
        if (files.length > 0){
            const UPLOAD_FILE = multiple ? new File(files, let_folder_name) : files[0]
            const UPLOAD_URL = file_to_url(UPLOAD_FILE)
            const A = document.createElement("a")
            A.href = UPLOAD_URL
            A.setAttribute("download", UPLOAD_FILE.name)
            document.body.appendChild(A)
            A.click()
            A.remove()
        }
    }
    return <>
    <BUTTON_CLICK 
        name={"upload file" as a.name} 
        func_event={func_event as a.func_event}
    />
    </>
}

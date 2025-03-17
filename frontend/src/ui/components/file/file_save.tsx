import React from "react";
import { file_to_date } from "../../convert/date";
import { file_to_url } from "../../convert/file";
import * as a from "../../type/alias";
import BUTTON_CLICK from "../button/button_click";
import JSZip from "jszip";

// Multiple Images to Zip File Download | JavaScript Tutorial
// https://youtu.be/83YNsdRzlqQ?si=R-zijMIwCacNTB3b

export default function FILE_SAVE({
    files,
    folder_name=undefined,
    multiple=false
}:{
    files:File[]
    folder_name?:string|undefined
    multiple?:boolean
}){
//------------------------------------------------------------------------------------
    function func_upload_url(url:string, name:string){
        const A = document.createElement("a")
        A.download = name
        A.href = url
        A.style.display = "none"
        document.body.appendChild(A)
        A.click()
        A.remove()
        URL.revokeObjectURL(url)
    }
//------------------------------------------------------------------------------------
    const func_event = async () =>{
        if (files.length > 0 && multiple === true){
            // STEP 02 : GET DATA FROM URL
            // time: 4:55
            const BLOB_ARR = files.map(async (item) => {
                const RES = await fetch(file_to_url(item))
                const OUTPUT = await RES.blob()
                return OUTPUT
            })
            const RES = await Promise.all(BLOB_ARR)

//------------------------------------------------------------------------------------
            // STEP 03 : CREATE ZIP OF THE DATA
            // time: 8:20
            const ZIP = new JSZip()
            const C_FOLDER_NAME = folder_name ? ZIP.folder(folder_name) : null
            RES.forEach((item, index) => {
                if(C_FOLDER_NAME !== null){
                    C_FOLDER_NAME.file(files[index].name, item)
                }
                else{
                    ZIP.file(files[index].name, item)
                }
            })
            const ZIP_FILE = await ZIP.generateAsync({type: "blob"})

//------------------------------------------------------------------------------------
            // STEP 04 :
            // time: 11:40
            const UPLOAD_URL = URL.createObjectURL(ZIP_FILE)
            func_upload_url(UPLOAD_URL, folder_name ? folder_name : "upload_file_" + file_to_date() + ".zip")
        }
        if (files.length > 0 && multiple === false){
            const UPLOAD_FILE = files[0]
            const UPLOAD_URL = file_to_url(UPLOAD_FILE)
            func_upload_url(UPLOAD_URL, UPLOAD_FILE.name)
        }
//------------------------------------------------------------------------------------
    }
    return <>
    <BUTTON_CLICK 
        name={"upload file" as a.name} 
        func_event={func_event as a.func_event}
    />
    </>
}

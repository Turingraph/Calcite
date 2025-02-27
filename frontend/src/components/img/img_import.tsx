import {useLayoutEffect, useState, useRef, useCallback} from "react";
import * as a from "../../type/alias";
import PANEL from "../asset/panel";
import OPT_EXIST_ARR from "../opt/opt_exist_arr";

// https://www.geeksforgeeks.org/
// how-to-upload-image-and-preview-it-using-reactjs/

// https://developer.mozilla.org/en-US/docs/
// Web/HTML/Element/input/file

// https://www.geeksforgeeks.org/
// reading-image-opencv-using-python/

const FILE_FORMAT = ".jpg,.jpeg,.bmp,.dib,.png,.webp,.sr,.ras,.tiff,.tif"


export default function IMG_IMPORT({
    img_arr
}:{
    img_arr:a.use_state_t<File[]|undefined>
}){
    return <></>
    // async function handle_submit(e:React.SyntheticEvent){
    //     e.preventDefault()
    //     // console.log("file",img_arr.ss)
    //     if(typeof img_arr.ss === "undefined") return 
    //     const FORM_DATA = new FormData()
    //     // FORM_DATA.append('file', img_arr.ss)

    // }
    // function handle_event(e:React.FormEvent<HTMLInputElement>) {
    //     const TARGET = e.target as HTMLInputElement & {
    //         files: File[]
    //     }
    //     img_arr.setss(TARGET.files)
    // }
    // const onDrop = useCallback(acceptedFiles => {
    //     // Do something with the files
    //   }, [])
    // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    // return <>
    // <div {...getRootProps()}>
    //   <input {...getInputProps()} />
    //   {
    //     isDragActive ?
    //       <p>Drop the files here ...</p> :
    //       <p>Drag 'n' drop some files here, or click to select files</p>
    //   }
    // </div>
    // </>
}
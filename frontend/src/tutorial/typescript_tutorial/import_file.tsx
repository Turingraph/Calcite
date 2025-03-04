import React, {useState} from "react";
import BUTTON_CLICK from "../../src/components/button/button_click";
import * as a from "../../src/type/alias"

// const HIDDEN_STYLE = {
//     opacity:0,
//     height:0,
//     lineHeight:0,
//     overflow: "hidden",
//     padding:0,
//     margin:0
// }

// const func_event = () =>{
//     const CONTROL = document.getElementById("import_image")
//     CONTROL?.click()
// }

// https://youtu.be/7fybEXre70o?si=YHjcLx4et-xyrtOw
export default function IMPORT_FILE(){
    const [ss_file, setss_file] = useState<File[]>([])
    const handle_event = (e:React.FormEvent<HTMLInputElement>)=>{
        // https://stackoverflow.com/questions/71798548/
        // cannot-convert-filelist-to-array-using-array-from-and-spread-syntax-in-typescrip
        const TARGET = e.target as HTMLInputElement
        setss_file(TARGET.files ? Array.from(TARGET.files) : [])
    }
    const JSX_ARR = ss_file.map((item,index)=>{
        // https://stackoverflow.com/questions/47370558/
        // javascript-document-lastmodified-returning-us-date-format
        const DAY = new Date(item.lastModified).toString().split(" ").slice(0, 5).join(" ")
        return <div key={index}>
            <h1>Name: {item.name}</h1>
            <h1>{DAY}</h1>
            <hr/>
            </div>
    })
    return <>
        <input
        // style={HIDDEN_STYLE}
        // id={"import_image"}
        type="file"
        multiple={true}
        // accept is not working on our Linux Firefox browser 
        accept={".txt, .py, .tsx"}
        onChange={(e)=>{handle_event(e)}}
        />
        {JSX_ARR}
    </>
}
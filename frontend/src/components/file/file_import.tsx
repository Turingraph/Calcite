import * as a from "../../type/alias";
import { img_t } from "../../type/obj";

export default function FILE_IMPORT({
    file_arr,
    multiple = false,
    file_format = undefined
}:{
    file_arr:a.use_state_t<File[]>
    multiple?:boolean
    file_format?:string|undefined
}){
    const handle_event = (e:React.FormEvent<HTMLInputElement>)=>{
        const TARGET = e.target as HTMLInputElement
        file_arr.setss(TARGET.files ? Array.from(TARGET.files) : [])
    }
    return <>
        <input
        type="file"
        multiple={multiple}
        // accept is not working on our Linux Firefox browser 
        accept={file_format}
        onChange={(e)=>{handle_event(e)}}
        />
    </>
}
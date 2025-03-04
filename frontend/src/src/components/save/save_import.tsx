import * as a from "../../type/alias";

export default function SAVE_IMPORT({
    arr,
    multiple = false,
    file_format = undefined
}:{
    arr:a.use_state_t<File[]>
    multiple?:boolean
    file_format?:string|undefined
}){
    const handle_event = (e:React.FormEvent<HTMLInputElement>)=>{
        const TARGET = e.target as HTMLInputElement
        arr.setss(TARGET.files ? Array.from(TARGET.files) : [])
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
import * as a from "../../type/alias";

export default function FILE_OPEN({
    setss_files,
    multiple = false,
    file_format = undefined
}:{
    setss_files:a.setss_t<File[]>
    multiple?:boolean
    file_format?:string|undefined
}){
    const handle_event = (e:React.FormEvent<HTMLInputElement>)=>{
        const TARGET = e.target as HTMLInputElement
        setss_files(TARGET.files ? Array.from(TARGET.files) : [])
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
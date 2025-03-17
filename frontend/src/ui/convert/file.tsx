export function file_to_url(input:Blob|MediaSource|File){
    return URL.createObjectURL(input)
}

export async function url_to_file(input:string, metadata:string = 'text/plain'){
    // https://stackoverflow.com/questions/25046301/
    // convert-url-to-file-or-blob-for-filereader-readasdataurl
    const RESPONSE = await fetch(input);
    const DATA = await RESPONSE.blob();
    return new File([DATA], "test.jpg", {type:metadata});
}

// https://stackoverflow.com/questions/42980645/
// easier-way-to-transform-formdata-into-query-string
export function formdata_to_url(input:FormData){
    return new URLSearchParams(
    input as unknown as Record<string, string>,
    ).toString();
}

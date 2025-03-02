import JSZip from "jszip";
import { useState } from "react";

export async function JSZip_00(){
    const ZIP = new JSZip();

    ZIP.file("Hello.txt", "Hello World\n");

    const ARCHIVE = await ZIP.generateAsync({type:"blob"})

    return new Response(ARCHIVE, {
        status: 200,
        headers:{
            'Content-Type':'application/zip'
        }
    })
}

/*
export function JSZip_01(){
    const [zippedFile, setZippedFile] = useState(null);
    const [ss_sfile, setss_sfile] = useState<File[]>([]);

    // PART 04
    const fileTransferUpload = (formData:FormData) => {
        // Specify headers for FormData
        console.log("uploading file");
        // Make the POST request with FormData
        return postfileupload("api/file-transfer-upload", formData);
    };
    
    // PART 05
    async function postfileupload(url:string, data:FormData) {
        return axiosApi.post(url, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    }

    // PART 02
    const formatBytes = (bytes:number, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (
            parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
        );
    };

    // PART 03
    const handleZipFiles = async () => {
        const zip = new JSZip();
        
        ss_sfile.forEach((file, index) => {
            zip.file(`${index + 1}_${file.name}`, file);
        });
  
        const zipContent = await zip.generateAsync({ type: "blob" });
        try {
            // Create FormData to append the zip file
            const formData = new FormData();
            formData.append("uploadFile", zipContent, "zippedfile.zip");
            fileTransferUpload(formData);
            console.log("Uploading file Completed");
        } catch (error) {
            console.log(error);
            console.log("Error uploading file");
        }
        // toggle(); // Assuming toggle() is a function to handle any UI changes after upload
    };

    // PART 01
    const handleAcceptedFiles = async (files:File[]) => {
        files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size),
          })
        );
        setss_sfile(files);
        handleZipFiles();
      };
    
    return <>
    <input 
        multiple 
        type="file" 
        name="file"  
        onChange={(acceptedFiles)=>handleAcceptedFiles(acceptedFiles)}
    />
    </>
}
*/

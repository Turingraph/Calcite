import React from "react";
import BUTTON_CLICK from "../../components/button/button_click";
import * as a from "../../type/alias"

export default function CREATE_FILE(){
    const func_event = () =>{
        // Create data
        const LONG_DATA = "Linked_list, Stack, Queue, Binary_Search_Tree, Binary_Tree, Graph etc."
        const ENCODE_8B = new TextEncoder()
        const SIZE = 5+1+LONG_DATA.length
        const AB = new ArrayBuffer(SIZE)
        const DATA = new DataView(AB)
        DATA.setInt8(0, 72)
        DATA.setInt8(1, 69)
        DATA.setInt8(2, 76)
        DATA.setInt8(3, 76)
        DATA.setInt8(4, 79)
        DATA.setInt8(5, 10)
        for(let i = 5; i < SIZE; i++){
            DATA.setInt8(i, Number(ENCODE_8B.encode(LONG_DATA[i-5])))
        }

        // Show data as 8-bits data
        const AB8 = new Uint8Array(AB)
        console.log("Data as u-8 bit :\t",AB8.toString())

        // Convert 8-bits data to string
        // https://stackoverflow.com/questions/6965107/
        // converting-between-strings-and-arraybuffers
        const TRANSLATOR = new TextDecoder("utf-8");
        console.log("Data as string :\t",TRANSLATOR.decode(AB8).toString())

        // Convert ArrayBuffer to Blob
        // const AMEBA = new Blob([AB])
        // console.log("Data as 5 bytes Blob :\t",JSON.stringify(AMEBA))

        // Convert data as file
        const MY_FILE = new File(
            [AB], "my_file.txt", {type:"text/plain"})

        // Convert data as URL
        const URL_OF_MY_FILE = URL.createObjectURL(MY_FILE)
        console.log("Click this to see the file\t", URL_OF_MY_FILE)

        // Allow the user to upload my_file.txt by clicking A
        const PREV_A = document.getElementById("download_my_file");
        PREV_A?.remove();
        const A = document.createElement("a")
        A.id = "download_my_file"
        A.href = URL_OF_MY_FILE
        A.download = MY_FILE.name
        A.textContent = "Download "+MY_FILE.name
        document.querySelector("div")?.append(A)
    }
    return <>
    <BUTTON_CLICK 
        name={"Hello World" as a.name}
        func_event={func_event as a.func_event}
    />
    <div></div>
    </>
}

// https://youtu.be/ScZZoHj7mqY?si=G2Z4qqiWGyBmaKom
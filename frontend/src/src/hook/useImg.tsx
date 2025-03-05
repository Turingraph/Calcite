import { useEffect, useState } from "react";
import * as a from "../type/alias"

// Learn Custom Hooks In 10 Minutes
// https://youtu.be/6ThXsUwLWvc?si=TOVkyJuod3AuQxMS

export default function useSize(init:number, min:number = 0, max:number|undefined = undefined){
    const [ss_size, setss_size] = useState<number>(init)
    useEffect(()=>{
        if(ss_size < min){
            setss_size(min)
        }
        else if(max !== undefined && ss_size > max){
            setss_size(max)
        }
    },[ss_size])
    return [ss_size, setss_size]
}
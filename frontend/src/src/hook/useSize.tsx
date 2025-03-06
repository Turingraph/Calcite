import {useReducer} from "react";
import { num_to_size } from "../utility/convert";

// Learn Custom Hooks In 10 Minutes
// https://youtu.be/6ThXsUwLWvc?si=TOVkyJuod3AuQxMS

type action_t = {
    input:number,
    max:number,
    min:number
}

function reducer(prev:number, action:action_t){
    return num_to_size(action.input, action.max,action.min)
}

export default function useSize(init:number, min:number = 0, max:number|undefined = undefined){
    const [ss_size, setss_size] = useReducer(reducer, init)
    return [ss_size, setss_size]
}
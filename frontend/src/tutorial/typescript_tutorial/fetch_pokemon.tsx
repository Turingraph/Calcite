import React, {useState} from "react";
import * as a from "../../src/type/alias"
import OBJ_SELF from "../../src/components/obj/obj_self";
import INPUT_STR from "../../src/components/input/input_str";
import { STR_TO_H } from "../../src/utility/convert";
import BUTTON_CLICK from "../../src/components/button/button_click";
import * as uarr from "../../src/utility/utility_arr"

type pokemon_t = {
    name:a.name,
    id:number,
    sprites:object
}

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
const SELECTED_PROPERTY = ["id", "sprites"]

export default function FETCH_POKEMON(){
    const [ss_arr, setss_arr] = useState<pokemon_t[]>([])
    const [ss_select, setss_select] = useState<number|undefined>(undefined)
    const [ss_name, setss_name] = useState<string>("")

    async function func_create_t<T>(): Promise<T|undefined> {
        const RESPONSE = await fetch(`${BASE_URL}/${ss_name}`);
        if (!RESPONSE.ok) {
            return undefined
        }
        return await RESPONSE.json() as T;
    }

    // https://stackoverflow.com/questions/11040472/
    // how-to-check-if-object-property-exists-with-a-variable-holding-the-property-name

    // https://stackoverflow.com/questions/43389414/
    // how-to-iterate-over-keys-of-a-generic-object-in-typescript

    // https://stackoverflow.com/questions/42966362/
    // how-to-use-object-values-with-typescript

    // https://stackoverflow.com/questions/41993515/
    // access-object-key-using-variable-in-typescript

    async function func_create_pokemon(){
        const NEW_POKEMON = await func_create_t()
        const NEW_OBJ = {
            name:ss_name as a.name,
            id:0,
            sprites:{}
        } as pokemon_t
        if(typeof NEW_POKEMON === "object"){
            for(const ATTR in NEW_POKEMON){
                if(SELECTED_PROPERTY.includes(ATTR)){
                    const ATTR_T = ATTR as keyof typeof NEW_POKEMON;
                    NEW_OBJ[ATTR_T] = NEW_POKEMON[ATTR_T];
                }
            }
            uarr.push_arr_name(NEW_OBJ, {ss:ss_arr, setss:setss_arr})
        }
    }

    const JSX_ARR = ss_arr.map((item,index)=>{
        return <div key={index}>
            <OBJ_SELF
                arr={{ss:ss_arr, setss: setss_arr}}
                this_item={index}
                ss_select={{ss:ss_select, setss:setss_select}}
                jsx_additional={<>
                    <STR_TO_H opt_name={"id: " + item.id.toString() as a.opt_name}/>
                </>}
                />
            <img src={JSON.stringify(item.sprites).split('"')[15]}/>
            <hr/>
        </div>
    })
    return <>
    <STR_TO_H opt_name={"Write Pokemon name" as a.opt_name}/>
    <INPUT_STR input={{ss:ss_name, setss:setss_name}}/>
    <BUTTON_CLICK 
        name={"Create "+ss_name as a.name} 
        func_event={func_create_pokemon as a.func_event}
    />
    {JSX_ARR}
    </>
}

/*
Reference
1.  How to FETCH data from an API using JavaScript 
-   https://youtu.be/37vxWr0WgQk?si=1pUqayWFeqjdE0oQ
2.  OnClick Async
-   https://stackoverflow.com/questions/54779318/
    can-async-functions-be-called-in-onclick-in-button-react
*/

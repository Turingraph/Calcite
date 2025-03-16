"use server"
import BUTTON_CLICK from "@/ui/components/button/button_click"
import * as a from "../../src/ui/type/alias"

const BASE_URL = `http://localhost:3000/`
const MY_TARGET_URL = `test/tutorial/access_api`

export default async function ACCESS_API(){
    
    async function func_get_00_request(){
        "use server"
        // https://stackoverflow.com/questions/75676177/
        // error-functions-cannot-be-passed-directly-to-client-components-unless-you-expli

        fetch(`https://pokeapi.co/api/v2/pokemon/mew`).then(response => response.text())
        .then((response) => {
            console.log("The weight of ",JSON.parse(response)?.name," is ",JSON.parse(response)?.weight," kg.")
        })
        .catch(err => console.log(err));
    }

    async function func_get_01_request(){
        "use server"
        // https://stackoverflow.com/questions/41946457/
        // getting-text-from-fetch-response-object

        fetch(
            BASE_URL + MY_TARGET_URL, 
            {method: "GET"}).then(response => response.text())
            .then((response) => {
                console.log("Who is Josh ? ",response)
            })
            .catch(err => console.log(err));

    }

    async function func_post_request(){
        "use server"
        // https://stackoverflow.com/questions/76309154/
        // next-js-typeerror-failed-to-parse-url-from-when-targeting-api-route-relati
        const RESPONSE = await fetch(
            BASE_URL + MY_TARGET_URL, 
            {
                method: "POST",
                body: JSON.stringify({what_is_josh_doing:"Josh Joestar is attacking STAND USER!"})
            });
        if (!RESPONSE) {
            return undefined
        }
        console.log("ACCESS_API : RESPONSE :", RESPONSE.body)
    }

    return <>
        <BUTTON_CLICK
            name={"GET_00" as a.name}
            func_event={func_get_00_request as a.func_event}
        />
        <hr/>
        <BUTTON_CLICK
            name={"GET_01" as a.name}
            func_event={func_get_01_request as a.func_event}
        />
        <hr/>
        <BUTTON_CLICK
            name={"POST" as a.name}
            func_event={func_post_request as a.func_event}
        />
    </>
}

import Ok_no_button from "../ok_no_button"
import config_type from "./type"
/*
To Do Now
1. Create Config UI that receive only Dictionary as Input and use useState Hook
2. simplify UX UI idea.
3. Define other ui type.

https://www.geeksforgeeks.org/how-to-convert-typescript-dictionary-to-string/
*/
export default function Config<type extends object>(
{
    current_value,
    update_func
}:config_type<type>
){
    const [ss_temp, setss_temp] = useState<type>()
    return (<>
    //
    </>)
}
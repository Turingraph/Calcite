import * as a from '../../src/type/alias'
import CLOSE_PANEL from "../../src/components/asset/close_panel";

export function TEST_CLOSE_PANEL(){
    return <>
    <CLOSE_PANEL 
        name={"Jotaro" as a.name} 
        jsx_element={<h1>Star Platinum</h1>}
    />
    </>
}
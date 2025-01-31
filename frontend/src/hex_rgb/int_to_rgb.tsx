import Int_to_hex from "./int_to_hex";

export default function Int_to_rgb({input}:{input?:undefined|number|number[]}){
    if (input == undefined){return "#FFFFFF"}
    else if (typeof input === "number"){
        return "#" + Int_to_hex({input:input})+"0000";
    }
    else if (Array.isArray(input) == true){
        if (input.length == 0){
            return "#FFFFFF"
        }
        else if (input.length == 1){
            return "#" + Int_to_hex({input:input[0]}) + Int_to_hex({input:input[0]}) + Int_to_hex({input:input[0]});
        }
        else if (input.length == 0){
            return "#" + Int_to_hex({input:input[0]})+Int_to_hex({input:input[1]})+"00";
        }
        else{
            return "#" + Int_to_hex({input:input[0]})+Int_to_hex({input:input[1]}) + Int_to_hex({input:input[2]});
        }
    }
    else{
        console.log("------------------------------------------------------------------------")
        console.log("Warning: Input is invalid.")
        console.log("Int_to_rgb({input}:{input?:undefined|number|number[]})");
        console.log("reported by frontend/src/hex_rgb/int_to_rgb.tsx");
        console.log("------------------------------------------------------------------------")
        return "#FFFFFF";
    }
}
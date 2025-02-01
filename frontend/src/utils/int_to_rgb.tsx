import input_t from "../types/basic/input_t";

function Int_to_hex({
    input = 0           
}:input_t<number>
){
    const HEX_ARR = [ 
        '0', '1', '2', '3', 
        '4', '5', '6', '7', 
        '8', '9', 'A', 'B', 
        'C', 'D', 'E', 'F'
    ]
    
    if (input == undefined){
        return "FF";
    }
    if (input > 255){
        input = 255;
    }
    if (input < 0){
        input = 0;
    }
    return (HEX_ARR[input/16] + HEX_ARR[input%16]);
}

export default function Int_to_rgb({
    input
}:input_t<undefined|number|number[]>
){
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
    // console.log("------------------------------------------------------------------------")
    // console.log("Warning: Input is invalid.")
    // console.log("Int_to_rgb({input}:{input?:undefined|number|number[]})");
    // console.log("reported by frontend/src/hex_rgb/int_to_rgb.tsx");
    // console.log("------------------------------------------------------------------------")
    return "#FFFFFF";
}
}
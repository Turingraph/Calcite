import * as a from "../../src/type/alias"

function Int_to_hex({
    value = 0           
}:a.value_t<undefined|number>
){
    const HEX_ARR = [ 
        '0', '1', '2', '3', 
        '4', '5', '6', '7', 
        '8', '9', 'A', 'B', 
        'C', 'D', 'E', 'F'
    ]
    
    if (value == undefined){
        return "FF";
    }
    if (value > 255){
        value = 255;
    }
    if (value < 0){
        value = 0;
    }
    return (HEX_ARR[value/16] + HEX_ARR[value%16]);
}

export default function Int_to_rgb({
    value
}:a.value_t<undefined|number|number[]>
){
if (value == undefined){return "#FFFFFF"}
else if (typeof value === "number"){
    return "#" + Int_to_hex({value:value})+"0000";
}
else if (Array.isArray(value) == true){
    if (value.length == 0){
        return "#FFFFFF"
    }
    else if (value.length == 1){
        return "#" + Int_to_hex({value:value[0]}) + Int_to_hex({value:value[0]}) + Int_to_hex({value:value[0]});
    }
    else if (value.length == 0){
        return "#" + Int_to_hex({value:value[0]})+Int_to_hex({value:value[1]})+"00";
    }
    else{
        return "#" + Int_to_hex({value:value[0]})+Int_to_hex({value:value[1]}) + Int_to_hex({value:value[2]});
    }
}
else{
    // console.log("------------------------------------------------------------------------")
    // console.log("Warning: value is invalid.")
    // console.log("Int_to_rgb({value}:{value?:undefined|number|number[]})");
    // console.log("reported by frontend/src/hex_rgb/int_to_rgb.tsx");
    // console.log("------------------------------------------------------------------------")
    return "#FFFFFF";
}
}
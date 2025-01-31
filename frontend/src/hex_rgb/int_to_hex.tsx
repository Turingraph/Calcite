import hex_arr from "./hex_arr";
export default function Int_to_hex(
{
    input            
}:{input?:number|undefined}
){
    if (input == undefined){
        return "FF";
    }
    if (input > 255){
        input = 255;
    }
    if (input < 0){
        input = 0;
    }
    return (hex_arr[input/16] + hex_arr[input%16]);
}
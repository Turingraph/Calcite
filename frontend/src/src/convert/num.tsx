export const HEX_ARR = [ 
    '0', '1', '2', '3', 
    '4', '5', '6', '7', 
    '8', '9', 'A', 'B', 
    'C', 'D', 'E', 'F'
]

export function num_to_ksize(input:number){
    if(Math.floor(input) < 3){
        return 3
    }
    else{
        if (Math.floor(input) % 2 === 1){
            return Math.floor(input)
        }
        else{
            return Math.floor(input) + 1
        }
    }
}

export function num_to_size(input:number|undefined, maxval:number, min = 0){
    if (input === undefined){
        return maxval
    }
    else if (input > maxval){
        return maxval
    }
    else if (input < min){
        return min
    }
    else{
        return input 
    }
}

export function num_to_255(input:number){
    return num_to_size(input,255)
}

export function num_to_rgb(input:undefined|number|number[]){
    if (input === undefined){
        return "#FFFFFF"
    }
    else if (typeof input === "number"){
        return "rgb("+num_to_255(input).toString()+"0, 0)";
    }
    else if (Array.isArray(input) === true){
        if (input.length === 0){
            return "#FFFFFF"
        }
        else if (input.length === 1){
            return "rgb("+num_to_255(input[0]).toString() + "," + num_to_255(input[0]).toString() + "," + num_to_255(input[0]).toString()+")";
        }
        else if (input.length === 2){
            return "rgb("+num_to_255(input[0]).toString() + ","+num_to_255(input[1]).toString() + ","+"0)";
        }
        else{
            return "rgb("+num_to_255(input[0]).toString() + ","+num_to_255(input[1]).toString() + "," + num_to_255(input[2]).toString()+")";
        }
    }
    else{
        return "#FFFFFF";
    }
}

export function str_to_default_num(
    default_input:number,
    input:string
){
if(!Number.isNaN(Number(input))){
    return Number(input)
}
return default_input
}
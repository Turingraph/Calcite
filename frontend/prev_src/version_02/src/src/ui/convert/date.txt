export type anymonth_t = "jan"|
          "january"  |"JAN"|"JANUARY"  |"Jan"|"January"  | 1| "01"|"1"|
    "feb"|"february" |"FEB"|"FEBRUARY" |"Feb"|"February" | 2| "02"|"2"|
    "mar"|"march"    |"MAR"|"MARCH"    |"Mar"|"March"    | 3| "03"|"3"|
    "apr"|"april"    |"APR"|"APRIL"    |"Apr"|"April"    | 4| "04"|"4"|
    "may"            |"MAY"            |"May"            | 5| "05"|"5"|
    "jun"|"june"     |"JUN"|"JUNE"     |"Jun"|"June"     | 6| "06"|"6"|
    "jul"|"july"     |"JUL"|"JULY"     |"Jul"|"July"     | 7| "07"|"7"|
    "aug"|"august"   |"AUG"|"AUGUST"   |"Aug"|"August"   | 8| "08"|"8"|
    "sep"|"september"|"SEP"|"SEPTEMBER"|"Sep"|"September"| 9| "09"|"9"|
    "oct"|"october"  |"OCT"|"OCTOBER"  |"Oct"|"October"  |10| "10"|
    "nov"|"november" |"NOV"|"NOVEMBER" |"Nov"|"November" |11| "11"|
    "dec"|"december" |"DEC"|"DECEMBER" |"Dec"|"December" |12| "12"

export type month_t = "01"|"02"|"03"|
    "04"|"05"|"06"|
    "07"|"08"|"09"|
    "10"|"11"|"12"

export function anymonth_to_num(input:anymonth_t){
    if(typeof input === "number"){
        return input
    }
    const VALUE = input.toUpperCase().substring(0, 3)
    switch(VALUE){
        case "JAN":{
            return 1
        }
        case "FEB":{
            return 2
        }
        case "MAR":{
            return 3
        }
        case "APR":{
            return 4
        }
        case "MAY":{
            return 5
        }
        case "JUN":{
            return 6
        }
        case "JUL":{
            return 7
        }
        case "AUG":{
            return 8
        }
        case "SEP":{
            return 9
        }
        case "OCT":{
            return 10
        }
        case "NOV":{
            return 11
        }
        case "DEC":{
            return 12
        }
        default:{
            console.log("convert.tsx/anymonth_to_num : Invalid Month")
            return -1
        }
    }
}

export function num_to_index_name(input:number){
    if(Math.abs(input) < 10){
        return "0"+Math.abs(input).toString()
    }
    return Math.abs(input).toString()
}

export function anymonth_to_month(input:anymonth_t){
    return num_to_index_name(anymonth_to_num(input)) as month_t
}

export function file_to_date(item:File|undefined = undefined, gmt:boolean=false){
    const DAY = (item ? new Date(item.lastModified) : new Date()).toString().split(" ")
    return (gmt ? DAY[5].replace("+","-")+"_" : "")+
        DAY[3]+"-"+anymonth_to_month(DAY[1] as anymonth_t)+"-"+DAY[2]+
        "_"+(DAY[4].split(":").join("-"))
}


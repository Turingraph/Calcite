// https://stackoverflow.com/questions/41790393
// /typescript-strict-alias-checking

export type nominal<t> = t & { readonly '': unique symbol };
export type name  = nominal<string>
export type opt_name  = undefined|name // optional name
// export type logo = name|img|undefined   // logo of button
export type img = nominal<File> // image
// export type func_convert<t_input, t_output> = nominal<(value:t_input)=>t_output>

export type select = nominal<boolean>
export type history<t> = {
    arr:t[],
    commit:string[]
    current:number
}
export type func_event = nominal<()=>void>
export type handle_event<input_mode> = nominal<
    (e:React.ChangeEvent<input_mode>)=>void
>

export type use_state_t<t> = {
    ss:t,
    setss:React.Dispatch<
        React.SetStateAction<t>
    >|((e:t)=>void)
}

export type use_state_uit<t> = {
    opt_name:opt_name,
    ss:t,
    setss:React.Dispatch<
        React.SetStateAction<t>
    >|((e:t)=>void)
}

// https://stackoverflow.com/questions/49752151/
// typescript-keyof-returning-specific-type

export type attr_of_t<t, v> = keyof {
    [p in keyof t as t[p] extends v? p: never]: any
}

// https://stackoverflow.com/questions/42678891/
// typescript-character-type
export type char_t = '!'|'"'|'#'|'$'|
    '%'|'&'|"'"|'('|')'|'*'|'+'|','|
    '-'|'.'|'/'|'0'|'1'|'2'|'3'|'4'|
    '5'|'6'|'7'|'8'|'9'|':'|';'|'<'|
    '='|'>'|'?'|'@'|'A'|'B'|'C'|'D'|
    'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|
    'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|
    'U'|'V'|'W'|'X'|'Y'|'Z'|'['|'\\'|
    ']'|'^'|'_'|'`'|'a'|'b'|'c'|'d'|
    'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|
    'm'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|
    'u'|'v'|'w'|'x'|'y'|'z'|'{'|'|'|
    '}'|'~';

export type output_file_format = {
    img:img_file_format_t|undefined|"zip",
    ocr:text_file_format_t|undefined|"zip",
}

export type text_file_format_t = "txt"|"csv"|"json"|"pdf"

export type img_file_format_t = "jpg"|
    "jpeg"|"bmp"|"dib"|"png"|"webp"|
    "sr"|"ras"|"tiff"|"tif"

export type file_format_t = "zip"|text_file_format_t|img_file_format_t

// https://stackoverflow.com/questions/76299963/
// typescript-check-if-object-has-property-and-check-property-value

// export type partial_unknown<t> = {
//     [k in keyof t]?: unknown;
//   };

export type ui_mode_t = {
    select:use_state_t<number|undefined>,
    ui_mode:use_state_t<"normal"|"rename"|"delete">
}

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
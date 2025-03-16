//------------------------------------------------------------------------------------

// TITLE : DATE TYPE

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

//------------------------------------------------------------------------------------

// TITLE : UTILITY TYPE

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

export type history_t<t> = {
    arr:t[],
    commit:string[]
    current:number
}

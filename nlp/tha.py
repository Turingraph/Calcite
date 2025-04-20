from pythainlp.tokenize import Trie, word_tokenize, subword_tokenize
from pythainlp.corpus.common import thai_words
from utility.utility_advance import file_to_liststr
import re
from pythainlp.spell import spell

def sentence_to_list(
        text:str,
        custom_words:list[str] = [],
        custom_words_path:str|None = None)->list[str]:
    ls = []
    if custom_words_path != None:
        ls = file_to_liststr(custom_words_path)
    return word_tokenize(
        text,
        engine="newmm",
        custom_dict=Trie(
            list(set(
                list(thai_words())+
                list(set(custom_words))+
                list(set(ls))
                ))),
        keep_whitespace=True,
        join_broken_num=True)

"""
# The "wangchanberta" don't make the space between Thai and English word, 
# which add development complexity.

def wangchanberta_words(text:str):
    return subword_tokenize(
        text=text,
        engine = "wangchanberta",
        keep_whitespace=True
    )"""

def thai_to_arabic_digit(number:str):
    match number:
        case "๐":
            return "0"
        case "๑":
            return "1"
        case "๒":
            return "2"
        case "๓":
            return "3"
        case "๔":
            return "4"
        case "๕":
            return "5"
        case "๖":
            return "6"
        case "๗":
            return "7"
        case "๘":
            return "8"
        case "๙":
            return "9"
        case default:
            return number

def thai_to_arabic_number_text(text:str):
    output = ""
    for i in text:
        output += thai_to_arabic_digit(i)
    return output

def correct_texts(
        text:str,
        custom_words:list[str] = [],
        custom_words_path:str|None = None,
        no_thai_number:bool = False,
        single_thai_char:bool = True)->str:
    ls = sentence_to_list(
        text=text,
        custom_words=custom_words,
        custom_words_path=custom_words_path
    )
    output = []
    for i in ls:
        # https://stackoverflow.com/questions/56285589/
        # how-can-i-check-string-is-thai-language-that-return-boolean-like-isalpha
        # https://stackoverflow.com/questions/9012008/
        # pythons-re-return-true-if-string-contains-regex-pattern
        if (
            bool(re.search("[\u0E00-\u0E7F]+", i)) 
            and (
                (len(i) > 1 and single_thai_char == True) 
                or (single_thai_char == False)
            )):
            if no_thai_number == True:
                output.append(thai_to_arabic_number_text(spell(i)[0]))
            else:
                output.append(spell(i)[0])
        elif (bool(re.search("[\u0E00-\u0E7F]+", i)) == False):
            output.append(i)
    text_output = ""
    for i in output:
        text_output += i
    return text_output

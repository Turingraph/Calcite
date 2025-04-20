from pythainlp.tokenize import Trie, word_tokenize
from pythainlp.corpus.common import thai_words
from utility.utility_advance import file_to_liststr
import re
from pythainlp.spell import spell

def sentence_to_list(
        text:str,
        custom_words:list[str] = [],
        custom_words_path:str|None = None,
        keep_whitespace:bool = True)->list[str]:
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
        keep_whitespace=keep_whitespace,
        join_broken_num=True)

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
        output = thai_to_arabic_digit(i)
    return output

def spell_texts(
        text:str,
        custom_words:list[str] = [],
        custom_words_path:str|None = None,
        keep_whitespace:bool = True,
        no_thai_number:bool = True)->list[str]:
    ls = sentence_to_list(
        text=text,
        custom_words=custom_words,
        custom_words_path=custom_words_path,
        keep_whitespace=keep_whitespace
    )
    output = []
    for i in ls:
        if re.match('[A-Za-z0-9]', i) or i in "\n,.!@#$%^&*()_-+=[]:;\"\'<>?~` ":
            output.append(i)
        else:
            if no_thai_number == True:
                output.append(thai_to_arabic_number_text(spell(i)))
            else:
                output.append(spell(i))
    return output

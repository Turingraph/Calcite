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

def spell_texts(
        text:str,
        custom_words:list[str] = [],
        custom_words_path:str|None = None,
        keep_whitespace:bool = True)->list[str]:
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
            output.append(spell(i))
    return output

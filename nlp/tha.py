from pythainlp.tokenize import Trie, word_tokenize
from pythainlp.corpus.common import thai_words
from utility.utility_advance import file_to_liststr

def sentence_to_list(
        text:str,
        custom_words:list[str] = [],
        custom_words_path:str|None = None,
        keep_whitespace:bool = True):
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

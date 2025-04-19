# What is Pythai NLP ?

PyThaiNLP is a Python package for text processing and linguistic analysis, similar to nltk, with focus on Thai language.

PyThaiNLP Features that will be applied in our OCR library.

1.  Thai linguistic unit segmentation/tokenization, including sentence (sent_tokenize), word (word_tokenize), and subword segmentations based on Thai Character Cluster (subword_tokenize)
2.  Thai spelling suggestion and correction (spell and correct), and filter some incorrect spelled word

<!-- 
3.  Convenient character and word classes, like Thai consonants (pythainlp.thai_consonants), vowels (pythainlp.thai_vowels), digits (pythainlp.thai_digits), and stop words (pythainlp.corpus.thai_stopwords) – comparable to constants like string.letters, string.digits, and string.punctuation
1.  Thai datetime formatting (thai_strftime)
1.  Thai-English keyboard misswitched fix (eng_to_thai, thai_to_eng)
1.  Command-line interface for basic functions, like tokenization and pos tagging (run thainlp in your shell)
 -->

Reference
-   https://pythainlp.org/about/

## How to install PyThai NLP ?

Read this https://pythainlp.org/dev-docs/notes/installation.html

## PyThai NLP Q and A

Read this https://pythainlp.org/FAQ

# PyThai NLP Basic Command.

Reference
-   https://www.borntodev.com/2021/09/06/%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B1%E0%B8%9A-pythainlp/

## Command No.1 : How many percent does the given string has a Thai script ?

This command return how many percent does the given string has a Thai script.

```
pythainlp.util.countthai("Natural Language Processing หรือ การประมวลผลภาษาธรรมชาติ")
# 51.92307692307693
```

## Command No.2 : How to separate Thai sentence in myltuple sentence ?

Script

```
from pythainlp import sent_tokenize

text = ("การประมวลผลภาษาธรรมชาติ เป็นวิทยาการแขนงหนึ่งในหมวดหมู่ของเทคโนโลยีปัญญาประดิษฐ์")

print("default (crfcut):")
print(sent_tokenize(text))
print("\nwhitespace+newline:")
print(sent_tokenize(text, engine="whitespace+newline"))
```

Output

```
default (crfcut):
['การประมวลผลภาษาธรรมชาติ เป็นวิทยาการแขนงหนึ่งในหมวดหมู่ของเทคโนโลยีปัญญาประดิษฐ์']

whitespace+newline:
['การประมวลผลภาษาธรรมชาติ', 'เป็นวิทยาการแขนงหนึ่งในหมวดหมู่ของเทคโนโลยีปัญญาประดิษฐ์']
```

## Command No.3 : How to spell Thai word correctly ?

```
from pythainlp import correct
correct("แอพพริเคชัน")

# แอปพลิเคชัน
```

# Thai linguistic unit segmentation/tokenization

We will use `pythainlp.tokenize` module to 
1.  separate Thai sentence into multiple words, such that we can check if each words spelled correctly.
2.  separate Thai sentence into multiple sentence for placing valid space in Thai text.

Reference
-   https://pythainlp.org/dev-docs/api/tokenize.html

## pythainlp.tokenize.subword_tokenize(text: str, engine: str = 'tcc', keep_whitespace: bool = True) → List[ str ]

Parameters
1.  text (str) – text to be tokenized
2.  engine (str) – the name of subword tokenizer
-   We only use `engine = 'wangchanberta'` in our OCR library because we only care about separating Thai sentence into multiple words.
3.  keep_whitespace (bool) – keep whitespace
Returns
-   list of subwords as `List[ str ] `

```
text_1 = "ยุคเริ่มแรกของ ราชวงศ์หมิง"
text_2 = "ความแปลกแยกและพัฒนาการ"

subword_tokenize(text_1, engine='wangchanberta')
# output: ['▁', 'ยุค', 'เริ่มแรก', 'ของ', '▁', 'ราชวงศ์', 'หมิง']

subword_tokenize(text_2, engine='wangchanberta')
# output: ['▁ความ', 'แปลก', 'แยก', 'และ', 'พัฒนาการ']
```

## pythainlp.tokenize.word_tokenize(text: str, custom_dict: ~pythainlp.util.trie.Trie = < pythainlp.util.trie.Trie object >, engine: str = 'newmm', keep_whitespace: bool = True, join_broken_num: bool = True) → List[ str ]

### Parameters

Parameters
1.  text (str) – text to be tokenized
2.  engine (str) – name of the tokenizer to be used
3.  custom_dict (pythainlp.util.Trie) – dictionary trie (some engine may not support)
4.  keep_whitespace (bool) – True to keep whitespace, a common mark for end of phrase in Thai. Otherwise, whitespace is omitted.
5.  join_broken_num (bool) – True to rejoin formatted numeric that could be wrongly separated. Otherwise, formatted numeric could be wrongly separated.

Returns
-   list of words as `List[ str ]`

Options for engine
1.  attacut - wrapper for AttaCut., learning-based approach
2.  deepcut - wrapper for DeepCut, learning-based approach
3.  icu - wrapper for a word tokenizer in PyICU., from ICU (International Components for Unicode), dictionary-based
4.  longest - dictionary-based, longest matching
5.  mm - “multi-cut”, dictionary-based, maximum matching
6.  nercut - dictionary-based, maximal matching, constrained by Thai Character Cluster (TCC) boundaries, combining tokens that are parts of the same named-entity
7.  newmm (default) - “new multi-cut”, dictionary-based, maximum matching, constrained by Thai Character Cluster (TCC) boundaries with improved TCC rules that are used in newmm.
8.  newmm-safe - newmm, with a mechanism to avoid long processing time for text with continuously ambiguous breaking points
9.  nlpo3 - wrapper for a word tokenizer in nlpO3., adaptation of newmm in Rust (2.5x faster)
10. oskut - wrapper for OSKut., Out-of-domain StacKed cut for Word Segmentation
11.  sefr_cut - wrapper for SEFR CUT., Stacked Ensemble Filter and Refine for Word Segmentation
12.  tltk - wrapper for TLTK., maximum collocation approach

### Tokenize text with different tokenizers

```
from pythainlp.tokenize import word_tokenize

text = "โอเคบ่พวกเรารักภาษาบ้านเกิด"

word_tokenize(text, engine="newmm")
# output: ['โอเค', 'บ่', 'พวกเรา', 'รัก', 'ภาษา', 'บ้านเกิด']

word_tokenize(text, engine='attacut')
# output: ['โอเค', 'บ่', 'พวกเรา', 'รัก', 'ภาษา', 'บ้านเกิด']
```

### Tokenize text with whitespace omitted

```
text = "วรรณกรรม ภาพวาด และการแสดงงิ้ว "

word_tokenize(text, engine="newmm")
# output:
# ['วรรณกรรม', ' ', 'ภาพวาด', ' ', 'และ', 'การแสดง', 'งิ้ว', ' ']

word_tokenize(text, engine="newmm", keep_whitespace=False)
# output: ['วรรณกรรม', 'ภาพวาด', 'และ', 'การแสดง', 'งิ้ว']
```

### Join broken formatted numeric (e.g. time, decimals, IP addresses):

```
text = "เงิน1,234บาท19:32น 127.0.0.1"

word_tokenize(text, engine="attacut", join_broken_num=False)
# output:
# ['เงิน', '1', ',', '234', 'บาท', '19', ':', '32น', ' ',
#  '127', '.', '0', '.', '0', '.', '1']

word_tokenize(text, engine="attacut", join_broken_num=True)
# output:
# ['เงิน', '1,234', 'บาท', '19:32น', ' ', '127.0.0.1']
```

### Tokenize with default and custom dictionaries

```
from pythainlp.corpus.common import thai_words
from pythainlp.tokenize import dict_trie

text = 'ชินโซ อาเบะ เกิด 21 กันยายน'

word_tokenize(text, engine="newmm")
# output:
# ['ชิน', 'โซ', ' ', 'อา', 'เบะ', ' ',
#  'เกิด', ' ', '21', ' ', 'กันยายน']

custom_dict_japanese_name = set(thai_words()
custom_dict_japanese_name.add('ชินโซ')
custom_dict_japanese_name.add('อาเบะ')

trie = dict_trie(dict_source=custom_dict_japanese_name)

word_tokenize(text, engine="newmm", custom_dict=trie))
# output:
# ['ชินโซ', ' ', 'อาเบะ', ' ',
#  'เกิด', ' ', '21', ' ', 'กันยายน']
```

## pythainlp.tokenize.Tokenizer(custom_dict: Trie | Iterable[ str ] | str = [], engine: str = 'newmm', keep_whitespace: bool = True, join_broken_num: bool = True)

This class allows users to pre-define custom dictionary along with tokenizer and encapsulate them into one single object. 

### Tokenizer object instantiated with a list of words

```
text = "อะเฟเซีย (Aphasia) เป็นอาการผิดปกติของการพูด"
_tokenizer = Tokenizer(custom_dict=list(thai_words()), engine='newmm')
_tokenizer.word_tokenize(text)
# output:
# ['อะ', 'เฟเซีย', ' ', '(', 'Aphasia', ')', ' ', 'เป็น', 'อาการ',
#   'ผิดปกติ', 'ของ', 'การ', 'พูด']
```

### Tokenizer object instantiated with pythainlp.util.Trie:

```
from pythainlp.tokenize import Tokenizer
from pythainlp.corpus.common import thai_words
from pythainlp.util import dict_trie

custom_words_list = set(thai_words())
custom_words_list.add('อะเฟเซีย')
custom_words_list.add('Aphasia')
trie = dict_trie(dict_source=custom_words_list)

text = "อะเฟเซีย (Aphasia*) เป็นอาการผิดปกติของการพูด"
_tokenizer = Tokenizer(custom_dict=trie, engine='newmm')
_tokenizer.word_tokenize(text)
# output: ['อะเฟเซีย', ' ', '(', 'Aphasia', ')', ' ', 'เป็น', 'อาการ',
'ผิดปกติ', 'ของ', 'การ', 'พูด']
```

### Tokenizer object instantiated with a list of words from the txt files and tokenizer (`engine='newmm'`)

```
PATH_TO_CUSTOM_DICTIONARY = './custom_dictionary.txtt'

# write a file
with open(PATH_TO_CUSTOM_DICTIONARY, 'w', encoding='utf-8') as f:
    f.write('อะเฟเซีย\nAphasia\nผิด\nปกติ')

text = "อะเฟเซีย (Aphasia) เป็นอาการผิดปกติของการพูด"

# initiate an object from file with `attacut` as tokenizer
_tokenizer = Tokenizer(custom_dict=PATH_TO_CUSTOM_DICTIONARY, \
    engine='attacut')

_tokenizer.word_tokenize(text)
# output:
# ['อะเฟเซีย', ' ', '(', 'Aphasia', ')', ' ', 'เป็น', 'อาการ', 'ผิด',
#   'ปกติ', 'ของ', 'การ', 'พูด']

# change tokenizer to `newmm`
_tokenizer.set_tokenizer_engine(engine='newmm')
_tokenizer.word_tokenize(text)
# output:
# ['อะเฟเซีย', ' ', '(', 'Aphasia', ')', ' ', 'เป็นอาการ', 'ผิด',
#   'ปกติ', 'ของการพูด']
```

# Thai spelling suggestion and correction

The `pythainlp.spell` module is a powerful tool for finding the closest correctly spelled word to a given text in the Thai language.

Reference
-   https://pythainlp.org/dev-docs/api/spell.html

## pythainlp.spell.correct(word: str, engine: str = 'pn') → str

Parameters
1.  word (str) – word to correct spelling of
2.  engine (str) –
    1.  pn - Peter Norvig’s algorithm 1 (default)
    2.  phunspell - A spell checker utilizing spylls, a port of Hunspell.
    3.  symspellpy - symspellpy is a Python port of SymSpell v6.5.
    4.  wanchanberta_thai_grammarly - WanchanBERTa Thai Grammarly

Returns
-   the corrected word as `str`

The correct function is designed to correct the spelling of a single Thai word. Given an input word, this function returns the closest correctly spelled word from the dictionary, making it valuable for spell-checking and text correction tasks.

```
from pythainlp.spell import correct

correct("เส้นตรบ")
# output: 'เส้นตรง'

correct("ครัช")
# output: 'ครับ'

correct("สังเกตุ")
# output: 'สังเกต'

correct("กระปิ")
# output: 'กะปิ'

correct("เหตการณ")
# output: 'เหตุการณ์'
```

## pythainlp.spell.correct_sent(list_words: List[ str ], engine: str = 'pn') → List[ str ]

Parameters
1.  list_words (List[str]) – list of words in sentence
2.  engine (str) –
    1.  pn - Peter Norvig’s algorithm 1 (default)
    2.  phunspell - A spell checker utilizing spylls, a port of Hunspell.
    3.  symspellpy - symspellpy is a Python port of SymSpell v6.5.
    4.  wanchanberta_thai_grammarly - WanchanBERTa Thai Grammarly

Returns
-   the corrected list of words in sentence as `List[ str ]`

The correct_sent function is an extension of the correct function and is used to correct an entire sentence. It tokenizes the input sentence, corrects each word, and returns the corrected sentence. 

```
from pythainlp.spell import correct_sent

correct_sent(["เด็","อินอร์เน็ต","แรง"],engine='symspellpy')
# output: ['เด็ก', 'อินเทอร์เน็ต', 'แรง']
```

## pythainlp.spell.spell(word: str, engine: str = 'pn') → List[ str ]

Provides a list of possible correct spellings of the given word. The list of words are from the words in the dictionary that incurs an edit distance value of 1 or 2. The result is a list of words sorted by their occurrences in the spelling dictionary in descending order.

Parameters
1.  word (str) – Word to check spell of
2.  engine (str) –
    1.  pn - Peter Norvig’s algorithm 1 (default)
    2.  phunspell - A spell checker utilizing spylls, a port of Hunspell.
    3.  symspellpy - symspellpy is a Python port of SymSpell v6.5.
    4.  tltk - wrapper for TLTK.

Returns
-   list of possible correct words within 1 or 2 edit distance and sorted by frequency of word occurrences in the spelling dictionary in descending order as `List [ str ]`

```
from pythainlp.spell import spell

spell("เส้นตรบ",  engine="pn")
# output: ['เส้นตรง']

spell("เส้นตรบ")
# output: ['เส้นตรง']

spell("เส้นตรบ",  engine="tltk")
# output: ['เส้นตรง']

spell("ครัช")
# output: ['ครับ', 'ครัว', 'รัช', 'ครัม', 'ครัน', 'วรัช', 'ครัส',
# 'ปรัช', 'บรัช', 'ครัง', 'คัช', 'คลัช', 'ครัย', 'ครัด']

spell("กระปิ")
# output: ['กะปิ', 'กระบิ']

spell("สังเกตุ")
# output:  ['สังเกต']

spell("เหตการณ")
# output:  ['เหตุการณ์']
```

Note that `spell_sent` extends the spell-checking functionality to entire sentences. However we won't use `spell_sent` in version no.1 of our OCR app because it out of the project scope.

## NorvigSpellChecker, known(words: Iterable[ str ]) → List[ str ]

Parameters
1.  words (list[str]) – A list of words to check if they exist in the spelling dictionary
Returns
-   intersection of the given word list and words in the spelling dictionary AS `List[ str ]`

```
from pythainlp.spell import NorvigSpellChecker

checker = NorvigSpellChecker()

checker.known(["เพยน", "เพล", "เพลง"])
# output: ['เพล', 'เพลง']

checker.known(['ยกไ', 'ไฟล์ม'])
# output: []

checker.known([])
# output: []
```

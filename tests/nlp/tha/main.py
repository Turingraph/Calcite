###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import nlp.tha as tha
from utility.utility_advance import file_to_liststr
from utility.handle import index_name
from ocr_box.ocr import save_text

for i in range(4):
    text = file_to_liststr(path="text_" + index_name(i) + "_x.txt", separator=None)[0]
    text = tha.correct_texts(text=text, single_thai_char=True)
    save_text(text=text, path="text_" + index_name(i) + "_predict_y.txt")

"""
i = 0
text = file_to_liststr(path="text_" + index_name(i) + "_x.txt", separator=None)[0]
text = tha.correct_texts(text=text, single_thai_char=True)
save_text(text=text, path="text_" + index_name(0) + "_1tha_y.txt")
text = tha.correct_texts(text=text, single_thai_char=False)
save_text(text=text, path="text_" + index_name(0) + "_2tha_y.txt")
"""
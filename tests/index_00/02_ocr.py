###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor
from utility.utility import index_name

path = "/tests/index_00/img/box_img_"
file_format = ".jpg"

for i in range(3):
    img = ocr_box_editor(img = (parent + path + index_name(i) + file_format))
    img.get_ocr(lang="eng")
    img.save_text(path = "text/text_" + index_name(i)+".txt")

###############################################################################################################

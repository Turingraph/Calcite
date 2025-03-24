###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from utility.utility import index_name
from box.box_edit import box_edit

path = "/tests/01_index/img/box_img_"
file_format = ".jpg"

for i in range(3):
    img = box_edit(img = (parent + path + index_name(i) + file_format))
    img.get_ocr(lang="eng")
    img.save_text(path = "text_" + index_name(i))

###############################################################################################################

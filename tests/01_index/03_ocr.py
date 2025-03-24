###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit
from box.box_read import box_read
from utility.utility import index_name

path = "/tests/01_index/img/box_img_"
file_format = ".jpg"

for i in range(3):
    ocr_setting = box_edit(
        img = (parent + path + index_name(i) + file_format),
    )
    ocr_setting.get_ocr(conf=20,lang = 'eng')
    ocr_setting.save_text(path = ["text_02", "text_" + index_name(i)])

###############################################################################################################

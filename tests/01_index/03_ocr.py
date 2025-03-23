###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from utility.utility import index_name
from box.img_ocr import img_ocr

path = "/tests/01_index/img/box_img_"
file_format = ".jpg"

for i in range(3):
    ocr_setting = img_ocr(
        img = (parent + path + index_name(i) + file_format),
        lang = 'eng'
    )
    ocr_setting.img_to_str(conf=20)
    ocr_setting.save_text(path = ["text_02", "text_" + index_name(i)])

###############################################################################################################

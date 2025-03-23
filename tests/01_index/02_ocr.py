###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from utility.utility import index_name
from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

path = "/tests/01_index/img/box_img_"
file_format = ".jpg"

for i in range(3):
    ocr_setting = ocr_config(
        lang = 'eng'
    )
    img = img_process_rgb(img = (parent + path + index_name(i) + file_format)).img
    ocr_setting.img_to_str(img=img)
    ocr_setting.save_text(path = ["text", "text_" + index_name(i)])

###############################################################################################################

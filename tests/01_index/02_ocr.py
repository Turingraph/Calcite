###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.ocr_confg_arr import ocr_config_arr

path = [
    parent + "/tests/01_index/img/boxes_img_00.jpg",
    parent + "/tests/01_index/img/boxes_img_01.jpg",
    parent + "/tests/01_index/img/boxes_img_02.jpg"
]

ocr_setting = ocr_config_arr(img_arr=path)
ocr_setting.img_to_str()
ocr_setting.save_text(path="single_text")
ocr_setting.save_text_arr(path="multi_text")

###############################################################################################################

ocr_setting.update_img_arr(img_arr=parent + "/tests/01_index/img/img.jpeg")
ocr_setting.save_text(path="single_text_without_boxes")
print(ocr_setting.osd())

###############################################################################################################

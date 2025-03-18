###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_gray import img_process_gray
from include.ocr_confg_arr import ocr_config_arr

path = [
    parent + "/tests/01_index/img/boxes_img_00.jpg",
    parent + "/tests/01_index/img/boxes_img_01.jpg",
    parent + "/tests/01_index/img/boxes_img_02.jpg"
]

ls = []

for i in path:
    ls.append(img_process_gray(img=i))

ocr_setting = ocr_config_arr(multi_imgs=ls)
ocr_setting.img_to_str()
ocr_setting.save_text(path="np_single_text")
ocr_setting.save_text_arr(path="np_multi_text")
print(ocr_setting.osd())

###############################################################################################################

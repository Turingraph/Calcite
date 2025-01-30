###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.multi_ocrs import multi_ocrs

path = [
    parent + "/tests/01_index/img_out/boxes_img_00.jpg",
    parent + "/tests/01_index/img_out/boxes_img_01.jpg",
    parent + "/tests/01_index/img_out/boxes_img_02.jpg"
]

ocr_setting = multi_ocrs(multi_imgs=path)
ocr_setting.img_to_str()
ocr_setting.save_text(path="single_text")
ocr_setting.save_milti_text(path="multi_text")

###############################################################################################################

ocr_setting.update_multi_imgs(multi_imgs=parent + "/tests/01_index/img/img.jpeg")
ocr_setting.save_text(path="single_text_without_boxes")
print(ocr_setting.osd())

###############################################################################################################

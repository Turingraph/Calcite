###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np

import img_process.contour as tour
from include.boxes_img import boxes_img

path = parent + "/tests/01_index/img/img.jpeg"
img = boxes_img(img = path, kernel=np.ones((13, 3)))
img.dilate_img.show(title="default_dilate_image13x3")
img.select_boxes(min_w=20,min_h=200)
img.sort_boxes(method=0,reverse=True)
#img.show_boxes(rgb=255, title="marked image")
#img.origin_img.show(title="original image")
#img.save_boxes(path = "boxes_img")

###############################################################################################################

from include.ocr_confg_arr import ocr_config_arr

ocr_setting = ocr_config_arr(img_arr=img)
ocr_setting.img_to_str()
ocr_setting.save_text(path="b_single_text")
ocr_setting.save_text_arr(path="b_multi_text")

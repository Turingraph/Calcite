###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import img_process.contour as tour
from include.boxes_img import boxes_img
import numpy as np

path = parent + "/tests/01_index/img/img.jpeg"
img = boxes_img(img = path, kernel=np.ones((13, 3)))
img.dilate_img.show(title="default_dilate_image13x3")
img.select_boxes(min_w=20,min_h=200)
img.sort_boxes(method=0,reverse=True)
#img.show_boxes(rgb=255, title="marked image")
#img.origin_img.show(title="original image")
#img.save_boxes(path = "boxes_img")

###############################################################################################################

from include.multi_ocrs import multi_ocrs

ocr_setting = multi_ocrs(multi_imgs=img)
ocr_setting.img_to_str()
ocr_setting.save_text(path="b_single_text")
ocr_setting.save_milti_text(path="b_multi_text")

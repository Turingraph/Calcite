###############################################################################################################

import sys
import os

import numpy as np

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.boxes_img import boxes_img
from include.img_process_gray import img_process_gray
from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

path = parent + "/tests/03_sign/img/img.jpg"

img = img_process_gray(img=path)
img.zoom(scale=-1.4)
img.rotate()
img.sharp_filter2d()
# img.threshold_adapt()
# img.show()

ocr_set = ocr_config(psm=11)
img = boxes_img(img = img.img, kernel=np.ones((1,3)))
img.dilate_img.invert_img()
img.dilate_img.show()
img.select_boxes(min_h=50, max_h=100)
img.row_boxes()
img.show_boxes()
# img.threshold()
# img.save_img(path=["img", "canny"])

# img.sharp_filter2d()
# img.save_img(path=["img", "sharp"])
# # img.show()
# img.threshold_adapt()
# img.save_img(path=["img", "thresh"])

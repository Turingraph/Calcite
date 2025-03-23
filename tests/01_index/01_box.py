###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np

from box.img_dilate import img_dilate

path = parent + "/tests/01_index/img/img.jpeg"
img = img_dilate(img = path, kernel=np.ones((13, 3)))
img.select_box(min_w=20,min_h=200)
img.dilate_img.save_img(path="dilate_img13x3")
img.sort_box(method=0)
img_result = img.get_img_output()
img_result.save_multiple_imgs(path = "box_img")

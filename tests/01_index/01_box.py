###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np

from box.box_edit import box_edit

path = parent + "/tests/01_index/img/img.jpeg"
img = box_edit(img = path)
img.update_area_box(kernel=np.ones((13, 3)))
img.select_box(min_w=20,min_h=200)
img.get_dilate_box_read().save_img(rgb=None,path="dilate_img13x3")
img.sort_box(method=0)
img.get_box_read().save_imgarr(rgb=None,path = "box_img")

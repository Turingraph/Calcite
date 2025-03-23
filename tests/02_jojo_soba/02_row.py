###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.img_dilate import img_dilate
import numpy as np

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = img_dilate(img = path, kernel=np.ones((13, 23)))

img.select_box(min_w=1000,max_h=50)
img.sort_box(1)
box_arr = img.get_box_manage()
box_arr.row_box()
img.box = box_arr.get_box()
img.get_img_output().save_multiple_imgs(rgb=None,path=["img_02_row", "row"])

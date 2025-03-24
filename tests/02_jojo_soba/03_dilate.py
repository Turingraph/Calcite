###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_rgb import img_process_rgb
from box.box_edit import box_edit
import numpy as np

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = box_edit(img = path)
img.update_area_box(kernel=np.ones((13, 23)))
img.get_dilate_box_read().save_img(rgb=None,path=["img_03_dilate","dilate"])
img.select_box(min_w=1000,max_h=50)
img.sort_box(method=1)

img.get_dilate_box_read().save_img(path=["img_03_dilate","box_dilate"])
img.row_box()
img.get_box_read().save_img(path=["img_03_dilate","row_origin"])
img.get_dilate_box_read().save_img(path=["img_03_dilate","row_dilate"])

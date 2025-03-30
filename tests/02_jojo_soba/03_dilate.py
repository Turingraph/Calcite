###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit
import numpy as np

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = box_edit(img = path)
dilate_img = img.update_area_box(kernel=np.ones((13, 23)))
dilate_img.save_img(path=["img_03_dilate","dilate"])
img.select_box(min_w=1000,max_h=50)
img.sort_box(method=1)

color_dilate_img = box_edit(img=dilate_img.img, box=img.get_box())
color_dilate_img.get_box_read().save_img(path=["img_03_dilate","box_dilate"])
img.row_box()
img.get_box_read().save_img(path=["img_03_dilate","row_origin"])
color_dilate_img = box_edit(img=dilate_img.img, box=img.get_box())
color_dilate_img.get_box_read().save_img(path=["img_03_dilate","row_dilate"])

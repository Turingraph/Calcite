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

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = box_edit(img = path)
img.update_area_box(kernel=np.ones((13,23)))
img.select_box(min_w = 1000, max_h=50)
img.get_box_read().show_img(rgb=[255,0,0], title="origin")
img.get_box_read().save_img(rgb=[255,0,0], path = ["img_01_half","origin"])
img.row_half(1)
img.get_box_read().show_img(rgb=[255,0,0], title="half")
img.get_box_read().save_img(rgb=[255,0,0], path=["img_01_half","half"])
img.get_box_read().save_imgarr(rgb=[255,0,0], path=["img_01_half", "subhalf"])

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
img.update_area_box(kernel=np.ones((13, 23)))

img.select_box(min_w=1000,max_h=50)
img.sort_box(1)
img.row_box(is_double=True)
img.filter_half()
img.get_box_read().save_imgarr(
    rgb=None,
    path=["img_04_row_double", "row"]
)

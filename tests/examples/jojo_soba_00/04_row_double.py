###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np

from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/tests/examples/jojo_soba_00/img/thinn.jpg"
img = ocr_box_editor(img = path) 
img.update_bbox(kernel=np.ones((13, 23)))

img.select_box(min_w=1000,max_h=50)
img.sort_box(1)
img.row_box(is_double=True)
img.filter_half()
img.as_ocr_box_reader().save_many_imgs(
    rgb=None,
    path="img_04_row_double/row.jpg"
)

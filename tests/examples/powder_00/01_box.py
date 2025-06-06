###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor

path = "img/thresh.jpg"

img = ocr_box_editor(img = path,abs_path=False)
img.update_bbox()
img.select_box(min_x=300, min_h=500, max_h=1000)
img.add_width(area=75, index=0)
img.add_x(area=-10, index=0)
img.col_half(index=0, is_double=True)
# img.as_ocr_box_reader().show_img()
img.as_ocr_box_reader().save_ith_img(rgb=None, index = 1, path = "img/middle.jpg")

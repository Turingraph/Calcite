###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit

path = "/tests/08_powder/img/"
name = "thresh"
format = ".jpg"

img = box_edit(img = (parent + path + name + format))
img.update_area_box()
img.select_box(min_x=300, min_h=500, max_h=1000)
img.add_width(area=75)
img.add_x(area=-10)
img.col_half(index=0, is_double=True)
img.get_box_read().show_img()
img.get_box_read().save_sub_img(rgb=None, index = 1, path = "middle")

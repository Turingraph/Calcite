###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.boxes_img import boxes_img
import numpy as np

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = boxes_img(img = path, kernel=np.ones((13, 23)))

img.select_boxes(min_w=1000,max_h=50)
img.sort_boxes(1)
img.show_boxes(rgb=[255,0,0], title="before")
# print("*** BEFORE ***")
# for i in img.boxes:
#     print(i)
img.marked_img.save_img(["img_01","before"])
img.row_boxes()
img.show_boxes(rgb=[255,0,0], title="after")
img.marked_img.save_img(["img_01","after"])

img.row_boxes()
img.show_boxes(rgb=[255,0,0], title="after2")
img.marked_img.save_img(["img_01","after2"])

# print("*** AFTER  ***")
# for i in img.boxes:
#     print(i)

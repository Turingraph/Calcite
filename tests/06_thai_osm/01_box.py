###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from box.box_edit import box_edit

path = parent + "/tests/06_thai_osm/img/thresh.jpg"
img = box_edit(img = path)
img.get_ocr(lang="eng+tha")
img.update_line()
img.select_line(min_w = 0, min_h = 200)
img.get_box_read().show_img()
# img.get_ocr()
# img.sort_box(4)
# img.row_half(1)
# upper = box_edit(img = img.get_box_read().get_imgarr()[0])
# upper.get_box_read().show_img()
# upper.get_ocr(lang="eng+tha", psm=7)
# upper.save_text(path="upper")

# img = box_edit(img = img.get_box_read().get_imgarr()[1])
# img.get_box_read().show_img()


# img.get_osd(lang="eng+tha")

# img.get_box_read().show_img(rgb=[
#     [255,  0,  0],
#     [200, 50,  0],
#     [150,100,  0],
#     [100,150,  0],
#     [50 ,200,  0],
#     [0  ,255,  0],
#     [0  ,200, 50],
#     [0  ,150,100],
#     [0  ,100,150],
#     [0  ,50 ,200],
#     [0  ,0  ,250],
# ])

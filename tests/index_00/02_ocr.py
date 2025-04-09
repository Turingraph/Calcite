###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from ocr_box.ocr_box_editor import ocr_box_editor
from img_process_class.img_process_gray import img_process_gray
from utility.utility import index_name
import numpy as np

path = parent + "/tests/index_00/img/img.jpeg"
# It is recommended to use .threshold() before use .get_ocr() in most case.
img_thresh = img_process_gray(img = path)
img_thresh.threshold()
img = ocr_box_editor(img = img_thresh.img)
img.update_bbox(kernel=np.ones((13, 3)))
img.select_box(min_w=20,min_h=200)
img.sort_box(method=0)
img.as_ocr_box_reader().show_img()
i = 0
for item in img.as_ocr_box_reader().get_many_imgs():
    img_item = ocr_box_editor(img=item)
    img_item.get_ocr(lang="eng")
    img_item.save_text(path = "text/text_" + index_name(i)+".txt")
    i += 1

###############################################################################################################

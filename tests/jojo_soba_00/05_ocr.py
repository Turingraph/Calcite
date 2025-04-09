###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import numpy as np
from img_process_class.img_process_gray import img_process_gray
from ocr_box.ocr_box_editor import ocr_box_editor

path = parent + "/tests/jojo_soba_00/img/img.jpeg"
img_thresh = img_process_gray(img = path)
img_thresh.zoom(scale=-1.35)
img_thresh.threshold()
img_thresh.thin_font()
img = ocr_box_editor(img = img_thresh.img) 
img.update_bbox(kernel=np.ones((13, 23)))   # 89
# img.as_ocr_box_reader().show_img()
img.select_box(min_w=1000,max_h=50)         # 6
img.sort_box(1)
img.row_box(is_double=True)
img.filter_half()
img_arr = img.as_ocr_box_reader().get_many_imgs() # 7
# print(len(img_arr))

# ###############################################################################################################

date = ocr_box_editor(img=img_arr[2])
date.get_ocr(lang="tha+eng", psm=3)
date.save_text(path="text/date.txt")

# ###############################################################################################################

table = ocr_box_editor(img=img_arr[3])
table.get_ocr(lang="tha+eng", column=[1510,691], psm=11)
table.save_text(path="text/table.txt")

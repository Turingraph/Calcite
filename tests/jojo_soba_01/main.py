###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from basic_ocr.basic_ocr import get_ocr, get_table_img, get_threshold_img
from img_process_class.img_process_gray import img_process_gray

path = parent + "/tests/jojo_soba_01/img/img.jpeg"

img = get_threshold_img(
    image=path,
    scale=1.35,
    save_path="img/thresh.jpg"
)

img_box = get_table_img(
    image=img.img,
    min_w=1000,
    max_h=50
)
img_box.row_box()

"""
Even if it takes O(n) time to access i-th item of deque.
The deque output after row_box() is usually have less 
than 15 item.

So it is worth using deque over list for faster append.
"""

img_arr = img_box.as_ocr_box_reader().get_many_imgs()

for i in img_arr:
    img_process_gray(img=i).show_img()

get_ocr(
    image=img_arr[2],
    lang="eng+tha",
    save_path_img="img/date.jpg",
    save_path_ocr="text/date.txt",
)

get_ocr(
    image=img_arr[3],
    lang="eng+tha",
    save_path_img="img/table.jpg",
    save_path_ocr="text/table.txt",
    psm=11,
    column=[1510,691]
)

###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_rgb import img_process_rgb
from include.boxes_img import boxes_img
import numpy as np

path = parent + "/tests/02_jojo_soba/img/thinn.jpg"
img = boxes_img(img = path, kernel=np.ones((13, 23)))
img.dilate_img.save_img(["img_03_dilate","dilate"])
img.select_boxes(min_w=1000,max_h=50)
img.sort_boxes(1)

dilate_canvas:img_process_rgb = img_process_rgb(img.dilate_img.img)
c = 0
rgb = [
    [255,0,0],
    [0,255,0],
    [0,0,255]
]
for i in img.boxes:
    dilate_canvas.rectangle(rgb=rgb[c%3],x=i[0],y=i[1],w=i[2],h=i[3])
    c+=1
img.show_boxes(rgb=rgb)
img.marked_img.save_img(["img_03_dilate","box_origin"])
dilate_canvas.save_img(["img_03_dilate","box_dilate"])

img.row_boxes()
c = 0
dilate_canvas:img_process_rgb = img_process_rgb(img.dilate_img.img)
for i in img.boxes:
    dilate_canvas.rectangle(rgb=rgb[c%3],x=i[0],y=i[1],w=i[2],h=i[3])
    c+=1
img.show_boxes(rgb=rgb)
img.marked_img.save_img(["img_03_dilate","row_origin"])
dilate_canvas.save_img(["img_03_dilate","row_dilate"])

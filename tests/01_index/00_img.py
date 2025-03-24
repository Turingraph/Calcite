###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

import img_process.contour as tour
from img_process_class.img_process_gray import img_process_gray
from img_process_class.img_process_rgb import img_process_rgb
import numpy as np

path = parent + "/tests/01_index/img/img.jpeg"
img = img_process_rgb(img = path)
img.zoom(1)
img.show()

dilate_img = tour.contour_img(img=img.img, kernel=np.ones((13, 3)))
dilate_img = img_process_gray(img = dilate_img)
dilate_img.show()
dilate_img.save_img(path="dilate_img13x3")

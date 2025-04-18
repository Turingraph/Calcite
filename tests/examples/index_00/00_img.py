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

import img_process.contour as tour
from img_process_class.img_process_gray import img_process_gray
from img_process_class.img_process_rgb import img_process_rgb

path = parent + "/tests/examples/index_00/img/img.jpeg"
img = img_process_rgb(
    img = path,
    abs_path=True)
img.zoom(1)
img.show_img()

dilate_img = tour.contour_img(img=img.img, kernel=np.ones((13, 3)))
dilate_img = img_process_gray(img = dilate_img)
dilate_img.show_img()
dilate_img.save_img(path="img/dilate_img13x3.jpg")

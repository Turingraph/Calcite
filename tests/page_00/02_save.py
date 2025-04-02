###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

# https://stackoverflow.com/questions/41586429/opencv-saving-images-to-a-particular-folder-of-choice
from img_process_class.img_process_gray import img_process_gray
import cv2

path = parent + "/tests/page_00/img_text/thick.jpg"

img = img_process_gray(img=path)
img.zoom(scale=-1.23)
img.rotate()
img.threshold()

cv2.imwrite(os.path.join(parent + "../img.jpg"), img.img)
cv2.waitKey(0)

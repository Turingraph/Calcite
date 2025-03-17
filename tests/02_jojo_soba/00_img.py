###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################

from include.img_process_gray import img_process_gray

path = parent + "/tests/02_jojo_soba/img/img.jpeg"

img = img_process_gray(img=path)
img.zoom(zooms=-1.35)
img.rotate()
img.threshold()
img.save_img(path=["img", "thresh"])

img = img_process_gray(img=path)
img.zoom(zooms=-1.35)
img.rotate()
img.erode()
img.save_img(path=["img", "erode"])

img = img_process_gray(img=path)
img.zoom(zooms=-1.35)
img.rotate()
img.erode()
img.threshold()
img.save_img(path=["img", "eroth"])

img = img_process_gray(img=path)
img.zoom(zooms=-1.35)
img.rotate()
img.erode()
img.threshold()
img.thin_font()
img.save_img(path=["img", "thinn"])

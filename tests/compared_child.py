###############################################################################################################

import os
import sys

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
sys.path.append(parent)

###############################################################################################################

from utility.debug import are_2_imgs_same

for n in ["img", "thresh"]:
    img_00 = parent + "/tests/white_pig_00/img/" + n + ".jpg"
    img_01 = parent + "/tests/white_pig_01/img/" + n + ".jpg"
    if are_2_imgs_same(img_00=img_00, img_01=img_01):
        print("Identity")
    else:
        print("Inverse")

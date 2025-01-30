import cv2
import numpy as np
from img_process.utility import set_px, u_odd, gray_img
from utility.utility import get_options

message = """
-------------------------------------------------------------------------------------------
img_process/threshold.py/class threshold

class threshold:
    def __init__(
        self,
        method: int = cv2.THRESH_BINARY + cv2.THRESH_OTSU,
        thresh_px: int = 0,
        maxval: int = 255,
    ):
        ...
    def edit(self, img: np.ndarray) -> np.ndarray:
        ...
# This code create `new_img` based on threshold's attribute value, `img` and `method` options
new_img = threshold(...).edit(img = img) 

available `method` options
-	cv2.THRESH_BINARY       (0)
-	cv2.THRESH_BINARY_INV   (1)
-	cv2.THRESH_TRUNC        (2)
-	cv2.THRESH_TOZERO       (3)
-	cv2.THRESH_TOZERO_INV   (4)
-   cv2.THRESH_OTSU         (8)
-------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------- 
img_process/threshold.py/class threshold_adapt

class threshold_adapt:
    def __init__(
        self,
        method: int = cv2.THRESH_BINARY,
        adaptive_method: int = cv2.ADAPTIVE_THRESH_MEAN_C,
        ksize: int = 11,
        constant: int = 2,
        maxval: int = 255,
    ):
        ...

    def edit(self, img: np.ndarray) -> np.ndarray:
        ...
# This code create `new_img` based on threshold's attribute value, `img` and `adaptive_method` options
new_img = threshold_adapt(...).edit(img = img) 

available `adaptive_method` options
-	cv2.ADAPTIVE_THRESH_MEAN_C      (0)
-   cv2.ADAPTIVE_THRESH_GAUSSIAN_C  (1)
-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------
THRESH MODE IN CV
1.  cv2.THRESH_BINARY (0)
-   if px > thresh then px = maxval else px = 0
2.	cv2.THRESH_BINARY_INV (1)
-	if px < thresh then px = maxval else px = 0
3.	cv2.THRESH_TRUNC (2)
-	if px > thresh then px = thresh else px = px
4.	cv2.THRESH_TOZERO (3)
-	if px > thresh then px = px else px = 0
5.	cv2.THRESH_TOZERO_INV (4)
-	if px < thresh then px = px else px = 0
6.	cv2.ADAPTIVE_THRESH_MEAN_C (0)
-	Calculating the mean value of the surround pixels within the square ksize (width=ksize) and use that mean value as the thresh
7.	cv2.ADAPTIVE_THRESH_GAUSSIAN_C (1)
-	Calculating the "Gaussian" value of the surround pixels within the square ksize (width=ksize) and use that mean value as the thresh
8.	cv2.THRESH_OTSU (8)
-	Consider an image with only two distinct image values (bimodal image), 
-	where the histogram would only consist of two peaks. 
-	A good threshold would be in the middle of those two values. 
-	Similarly, Otsu's method determines an optimal global threshold value from the image histogram.
-	Limitation of Otsu Method
-	1. If object ksize is much smaller compared to background ksize
-	2. Image is very noisy
-	3. Image contains ksize with different discrete intensities
-	https://youtu.be/jUUkMaNuHP8?si=QnxBvTdVhQW3VTqR

Reference
*	https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html#ggaa9e58d2860d4afa658ef70a9b1115576ac7e89a5e95490116e7d2082b3096b2b8
-------------------------------------------------------------------------------------------
"""

class threshold:
    def __init__(
        self,
        method: int = cv2.THRESH_BINARY + cv2.THRESH_OTSU,
        thresh_px: int = 0,
        maxval: int = 255,
    ):
        self.method = method
        self.thresh_px = set_px(n=thresh_px)
        self.maxval = set_px(n=maxval)

    def edit(self, img: np.ndarray) -> np.ndarray:
        img = gray_img(img = img)
        return cv2.threshold(
            src=img, thresh=self.thresh_px, maxval=self.maxval, type=self.method
        )[1]
    
    def help() -> None:
        print(message)


class threshold_adapt:
    def __init__(
        self,
        method: int = cv2.THRESH_BINARY,
        adaptive_method: int = cv2.ADAPTIVE_THRESH_MEAN_C,
        ksize: int = 11,
        constant: int = 2,
        maxval: int = 255,
    ):
        self.method = method
        self.ksize = u_odd(n=ksize)
        self.constant = constant
        self.maxval = set_px(n=maxval)
        self.adaptive_method = get_options(
            input=adaptive_method,
            input_options=[cv2.ADAPTIVE_THRESH_MEAN_C, cv2.ADAPTIVE_THRESH_GAUSSIAN_C],
            message=message,
        )

    def edit(self, img: np.ndarray) -> np.ndarray:
        img = gray_img(img = img)
        return cv2.adaptiveThreshold(
            src=img,
            maxVal=self.maxval,
            adaptiveMethod=self.adaptive_method,
            thresholdType=self.method,
            blockSize=self.ksize,
            C=self.constant,
        )

    def help() -> None:
        print(message)

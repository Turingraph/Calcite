#------------------------------------------------------------------------
# contours.py

def warn_sort_contours():
    return """
-------------------------------------------------------------------------------------------
img_process/contour.py/def sort_contours

def sort_contours(
    contour: list | tuple, 
    reverse: bool = False, 
    method: int = 4
) -> list:
# This function sort the `contour` list or tuple, based on `method` option.

available `method` options
-   0 = x
-   1 = y
-   2 = width
-   3 = height
-   4 = size
-------------------------------------------------------------------------------------------
    """

#------------------------------------------------------------------------
# kernel_2d.py

def warn_kernel_2d():
    return """
-------------------------------------------------------------------------------------------
img_process/kernel_2d.py/def kernel_2d

def kernel_2d(
    w: int,
    h: int | None = None,
    scalar: float = 1,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
# This function create `np.ndarray` kernel with `(w, h)` as it's `shape`, based on `mode` option

available `mode` options
-   cv2.MORPH_RECT      =   Rectangular Kernel
>>> cv2.getStructuringElement(cv2.MORPH_RECT,(5,5))
array([[1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1]], dtype=uint8)

-   cv2.MORPH_ELLIPSE   =   Elliptical Kernel
>>> cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5))
array([[0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0]], dtype=uint8)

-   cv2.MORPH_CROSS     =   Cross Kernel
>>> cv2.getStructuringElement(cv2.MORPH_CROSS,(5,5))
array([[0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0]], dtype=uint8)

Reference
*   https://opencv24-python-tutorials.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_morphological_ops/py_morphological_ops.html
-------------------------------------------------------------------------------------------
"""

#------------------------------------------------------------------------
# rotate.py

def warn_sort_general_contours():
    return """
-------------------------------------------------------------------------------------------
img_process/rotate.py/def sort_general_contours

def sort_general_contours(
    contour: list | tuple, 
    reverse: bool = False, 
    method: int = 4
) -> list:
# This function sort the `contour` list or tuple, based on `method` option.

available `method` options
-   0 = x
-   1 = y
-   2 = width
-   3 = height
-   4 = size
-------------------------------------------------------------------------------------------
    """

#------------------------------------------------------------------------
# threshold.py

def warn_thresh():
    return """
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

#------------------------------------------------------------------------
# utility.py

def warn_valid_img():
    return "Error: Invalid NumPy array. len(img.shape) must be 2 or 3."

#------------------------------------------------------------------------
# show.py

def warn_save_img():
    return """
-------------------------------------------------------------------------------------------
img_process/show.py/def save_img

def save_img(
    img: np.ndarray,
    path:str|None = "img/",
    name:str = "thresh.jpg",
    abs_path:bool = False
) -> None:

available output image file format options
1.  jpg
2.  jpeg
3.  png
4.  gif
5.  bmp
6.  tiff
7.  ppm
8.  ico
9.  psd
-------------------------------------------------------------------------------------------
"""

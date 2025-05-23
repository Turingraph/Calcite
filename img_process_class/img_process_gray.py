from typing import Self
import cv2
import numpy as np
from img_process.blur import bilateral_blur, gauss_blur, mean_blur
from img_process.contour import contour_img
from img_process.kernel_2d import sharp_kernel_2d
from img_process.morphology import (
    canny, 
    dilate, 
    erode, 
    opening,
    remove_noise, 
    thick_font, 
    thin_font
)
from img_process.threshold import threshold, threshold_adapt
from img_process.utility import gray_img, invert_img, rgb_img
from img_process_class.img_process import img_process
from utility.save import get_valid_path


class img_process_gray(img_process):
    def __init__(
            self, 
            img: Self | np.ndarray | str,
            abs_path:bool = False):
        if type(img) == Self:
            self.img:np.ndarray = img.img
        elif type(img) == str:
            self.img:np.ndarray = cv2.imread(
                filename=get_valid_path(path=img, abs_path=abs_path)
            )
            if self.img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
            self.img:np.ndarray = cv2.cvtColor(src=self.img, code=cv2.COLOR_RGB2GRAY)
        elif type(img) == np.ndarray:
            self.img:np.ndarray = gray_img(img = img)
        else:
            raise TypeError("Error: Input must be an instance of 'img_process_gray', a NumPy array, or a file path.")

    ########################################################################################################################################################
    # img_process/morphology.py

    def remove_noice(self) -> None:
        self.img = remove_noise(img=self.img)

    def thin_font(self) -> None:
        self.img = thin_font(img=self.img)

    def thick_font(self) -> None:
        self.img = thick_font(img=self.img)

    # Increase the line width of the image
    def dilate(self, kernel: np.ndarray = np.ones(shape=(5, 5), dtype= np.uint8)) -> None:
        self.img = dilate(img=self.img, kernel= kernel)

    # Decrease the line width of the image
    def erode(self, kernel: np.ndarray = np.ones(shape=(5, 5), dtype=np.uint8)) -> None:
        self.img = erode(img=self.img, kernel=kernel)

    # erosion followed by dilation
    def opening(self, kernel: np.ndarray = np.ones(shape=(5, 5), dtype=np.uint8)) -> None:
        self.img = opening(img=self.img, kernel=kernel)

    # thin edge
    def canny(self, low_thresh: int = 100, high_thresh: int = 200) -> None:
        self.img = canny(img=self.img, low_thresh=low_thresh, high_thresh=high_thresh)

    # Blur the image for getting the format of the text
    def contour_img(
        self,
        thresh_px: None | int = None,
        kernel: np.ndarray = np.ones(shape=(2, 30)),
        ksize: int = 9,
    ) -> None:
        self.img = contour_img(
            img=self.img,
            thresh_px=thresh_px,
            kernel=kernel,
            ksize=ksize,
        )

    ########################################################################################################################################################
    # img_process/threshold.py
    # Both threshold and threshold_adapt are used for making the clear distinction 
    # between background and text in output image.

    def threshold(
        self,
        method: int = cv2.THRESH_BINARY + cv2.THRESH_OTSU,
        thresh_px: int = 0,
        maxval: int = 255,
    ) -> None:
        transformation = threshold(method=method, thresh_px=thresh_px, maxval=maxval)
        self.img = transformation.edit(img=self.img)


    def threshold_adapt(
        self,
        method: int = cv2.THRESH_BINARY,
        adaptive_method: int = cv2.ADAPTIVE_THRESH_MEAN_C,
        ksize: int = 11,
        constant: int = 2,
        maxval: int = 255,
    ) -> None:
        transformation = threshold_adapt(
            method=method, adaptive_method=adaptive_method, ksize=ksize, constant=constant, maxval=maxval
        )
        self.img = transformation.edit(img=self.img)

    ########################################################################################################################################################
    # img_process/kernel_2d.py

    # Sharp the image
    def sharp_filter2d(
        self, ls: list[float] = [-0.1, -5], center_px: int | None = None
    ) -> None:
        kernel2d = sharp_kernel_2d(ls=ls, center_px=center_px)
        self.img = cv2.filter2D(src=self.img, ddepth=-1, kernel=kernel2d)

    ########################################################################################################################################################
    # img_process/blur.py

    def mean_blur(self, w: int = 15, h:int = 15, scalar: None | int = None) -> None:
        self.img = mean_blur(img=self.img, w=w,h=h, scalar=scalar)

    def gauss_blur(self, ksize_w: int = 15, ksize_h:int = 15) -> None:
        self.img = gauss_blur(img=self.img, ksize_w=ksize_w,ksize_h=ksize_h)

    def bilateral_blur(self, ksize: int = 15, effect: int = 75) -> None:
        self.img = bilateral_blur(img=self.img, ksize=ksize, effect=effect)

    ########################################################################################################################################################
    # img_process/utility.py

    # Make the black area of the image become white and vice versa
    def invert_img(self) -> None:
        self.img = invert_img(img=self.img)

    ########################################################################################################################################################
    def get_gray_img(self):
        return self.img
    
    def get_rgb_img(self):
        return rgb_img(img = self.img)

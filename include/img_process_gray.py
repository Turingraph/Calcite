import cv2
import numpy as np
from include.img_process import img_process
from img_process.blur import mean_blur, gauss_blur, bilateral_blur
from img_process.morphology import (
    thin_font,
    thick_font,
    remove_noise,
    dilate,
    erode,
    opening,
    canny,
)
from img_process.utility import rgb_img, gray_img
from img_process.contour import contour_img
from img_process.threshold import threshold, threshold_adapt
from img_process.kernel_2d import sharp_kernel_2d
#from img_process.fft_2d import fft_blur, fft_sharp, get_fft, get_fft_image
from img_process.utility import invert_img
from typing import Self

class img_process_gray(img_process):
    def __init__(self, img: Self | np.ndarray | str):
        if type(img) == Self:
            self.img = img.img
        elif type(img) == str:
            self.img = cv2.imread(filename=img)
            if self.img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
            self.img = cv2.cvtColor(src=self.img, code=cv2.COLOR_RGB2GRAY)
        elif type(img) == np.ndarray:
            self.img = gray_img(img = img)
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

    def dilate(self, kernel: np.ndarray = np.ones(shape=(5, 5), dtype= np.uint8)) -> None:
        self.img = dilate(img=self.img, kernel= kernel)

    def erode(self, kernel: np.ndarray = np.ones(shape=(5, 5), dtype=np.uint8)) -> None:
        self.img = erode(img=self.img, kernel=kernel)

    def opening(self, kernel: np.ndarray = np.ones(shape=(5, 5), dtype=np.uint8)) -> None:
        self.img = opening(img=self.img, kernel=kernel)

    def canny(self, c1: int = 100, c2: int = 200) -> None:
        self.img = canny(img=self.img, c1=c1, c2=c2)

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

    def sharp_filter2d(
        self, ls: list[float] = [-0.1, -5], center_px: int | None = None
    ) -> None:
        kernel2d = sharp_kernel_2d(ls=ls, center_px=center_px)
        self.img = cv2.filter2D(src=self.img, ddepth=-1, kernel=kernel2d)

    ########################################################################################################################################################
    # img_process/blur.py

    def mean_blur(self, ksize: int = 15, scalar: None | int = None) -> None:
        self.img = mean_blur(img=self.img, ksize=ksize, scalar=scalar)

    def gauss_blur(self, ksize: int = 15) -> None:
        self.img = gauss_blur(img=self.img, ksize=ksize)

    def bilateral_blur(self, ksize: int = 15, effect: int = 75) -> None:
        self.img = bilateral_blur(img=self.img, ksize=ksize, effect=effect)

    """
    ########################################################################################################################################################
    # img_process/fft_2d.py

    def fft_blur(
        self, row: int, col: int, freq: int = 0, mode: int = cv2.MORPH_RECT
    ) -> None:
        self.img = fft_blur(img=self.img, row=row, col= col, freq=freq, mode=mode)

    def fft_sharp(
        self, row: int, col: int, freq: int = 0, mode: int = cv2.MORPH_RECT
    ) -> None:
        self.img = fft_sharp(img=self.img, row=row, col=col, freq=freq, mode=mode)

    def get_fft(self) -> np.ndarray:
        return get_fft(img=self.img)

    # https://stackoverflow.com/questions/61636701/is-there-a-way-in-a-class-function-to-return-an-instance-of-the-class-itself
    def get_fft_image(self) -> "img_process_gray":
        return img_process_gray(img=get_fft_image(img=self.img))
    """

    ########################################################################################################################################################
    # img_process/utility.py

    def invert_img(self) -> None:
        self.img = invert_img(img=self.img)

    ########################################################################################################################################################
    def get_gray_img(self):
        return self.img
    
    def get_rgb_img(self):
        return rgb_img(img = self.img)

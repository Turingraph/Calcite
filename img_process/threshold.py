import cv2
import numpy as np
from img_process.utility import set_px, get_ksize, gray_img
from img_process.warning import warn_thresh
from utility.handle import get_options

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
        print(warn_thresh())


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
        self.ksize = get_ksize(n=ksize)
        self.constant = constant
        self.maxval = set_px(n=maxval)
        self.adaptive_method = get_options(
            input=adaptive_method,
            input_options=(cv2.ADAPTIVE_THRESH_MEAN_C, cv2.ADAPTIVE_THRESH_GAUSSIAN_C),
            message=warn_thresh(),
        )

    def edit(self, img: np.ndarray) -> np.ndarray:
        img = gray_img(img = img)
        return cv2.adaptiveThreshold(
            src=img,
            maxValue=self.maxval,
            adaptiveMethod=self.adaptive_method,
            thresholdType=self.method,
            blockSize=self.ksize,
            C=self.constant,
        )

    def help() -> None:
        print(warn_thresh())

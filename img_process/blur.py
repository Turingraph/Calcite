import cv2
import numpy as np
from img_process.utility import get_ksize

def mean_blur(
        img: np.ndarray, 
        w:int = 15,
        h:int = 15,
        scalar: None | int | float = None
    ) -> np.ndarray:
    # Update each pixel value to average pixel value with in the ksize to Blur image
    w = get_ksize(n=w)
    h = get_ksize(n=h)
    if scalar == None:
        scalar = 1 / (w * h)
    kernel = scalar * np.ones(shape=(w, h))
    # https://youtu.be/KuXjwB4LzSA?si=mt-leKGKjpMnJGfg
    # https://www.geeksforgeeks.org/python-opencv-filter2d-function/
    return cv2.filter2D(
        src=img, 
        ddepth=-1, 
        kernel=kernel
    )

def gauss_blur(
        img: np.ndarray, 
        w:int = 15,
        h:int = 15,
    ) -> np.ndarray:
    # Blur the image based in the pixel with in ksize using Gaussian function
    # https://www.geeksforgeeks.org/python-image-blurring-using-opencv/
    w = get_ksize(n=w)
    h = get_ksize(n=h)
    return cv2.GaussianBlur(src=img, ksize=(w,h), float=0)

def bilateral_blur(
    img: np.ndarray,
    ksize:int = 15,
    effect: int = 75
) -> np.ndarray:
    # Remove the noise and preserve the edge.
    # https://youtu.be/LjbYKWAQA5s?si=1br6Rl9OYkTZQPJB
    # https://www.tutorialspoint.com/opencv/opencv_bilateral_filter.htm
    ksize = get_ksize(ksize)
    return cv2.bilateralFilter(
        src=img, d=ksize, sigmaColor=effect, sigmaSpace=effect
    )

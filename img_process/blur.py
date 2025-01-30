import cv2
import numpy as np
from img_process.utility import u_odd

def mean_blur(
        img: np.ndarray, 
        ksize: int = 15, 
        scalar: None | int | float = None
    ) -> np.ndarray:
    # Update each pixel value to average pixel value with in the ksize to Blur image
    ksize = u_odd(n=ksize)
    if scalar == None:
        scalar = (1 / ksize) ** 2
    kernel = scalar * np.ones(shape=(ksize, ksize))
    # https://youtu.be/KuXjwB4LzSA?si=mt-leKGKjpMnJGfg
    # https://www.geeksforgeeks.org/python-opencv-filter2d-function/
    return cv2.filter2D(
        src=img, 
        ddepth=-1, 
        kernel=kernel
    )

def gauss_blur(
        img: np.ndarray, 
        ksize: int = 15
    ) -> np.ndarray:
    # Blur the image based in the pixel with in ksize using Gaussian function
    # https://www.geeksforgeeks.org/python-image-blurring-using-opencv/
    ksize = u_odd(ksize)
    return cv2.GaussianBlur(src=img, ksize=(ksize, ksize), float=0)

def bilateral_blur(
    img: np.ndarray, ksize: int = 15, effect: int = 75
) -> np.ndarray:
    # Remove the noise and preserve the edge.
    # https://youtu.be/LjbYKWAQA5s?si=1br6Rl9OYkTZQPJB
    # https://www.tutorialspoint.com/opencv/opencv_bilateral_filter.htm
    ksize = u_odd(ksize)
    return cv2.bilateralFilter(
        src=img, d=ksize, sigmaColor=effect, sigmaSpace=effect
    )

import numpy as np
import math
from img_process.kernel_2d import kernel_2d
from img_process.utility import get_size
from img_process.show import show
import cv2

"""
Note that
* Time - Amplitude               Frequency - Amplitude         
* amplitude fast in short time = high frequency signal
* amplitude slow in long  time = low  frequency signal
* Desmos Simulation: https://www.desmos.com/calculator/utr2n8y1ja
* We apply this idea for 2D image processing task.

Keyword
* freq = frequency
* cx = center x
* cy = center y

Other Learning Resource
1. The Discrete Fourier Transform: Most Important Algorithm Ever?
* https://youtu.be/yYEMxqreA10?si=-MZ6QTnQq0DmxV06
2. he Remarkable Story Behind The Most Important Algorithm Of All Time
* https://youtu.be/nmgFG7PUHfo?si=WYsNGYudyPnMzE4c
3. The Fourier Series and Fourier Transform Demystified
* https://youtu.be/mgXSevZmjPc?si=X-V8HRe0QYVm8QUL
"""

########################################################################################################################################################


def get_fft(img: np.ndarray) -> np.ndarray:
    scale = 255
    # https://docs.opencv.org/4.x/de/dbc/tutorial_py_fourier_transform.html
    img = img / np.float32(scale)
    # dft is the array that contains complex numbers.
    dft = np.fft.fft2(a=img, s=None)  # fft_size)
    # zero frequency component of dft will be at top left corner.
    # If you want to bring it to center, you need to shift the result n/2 in both dorection
    # using np.fft.fftshift().
    dft = np.fft.fftshift(x=dft)
    # By default, the transform is computed over the last two axes of the input array
    # Implies that in default case, the shape of dft is the same as shape of img.
    return dft


def get_ifft(dft: np.ndarray) -> np.ndarray:
    dft = np.fft.ifftshift(x=dft)
    img = np.fft.ifft2(a=dft)
    img = np.real(val=img)
    return img


def get_fft_image(img: np.ndarray) -> np.ndarray:
    dft = get_fft(img=img)
    dft = np.abs(dft)
    dft = dft / (255.0**2)
    dft = dft ** (1 / 4)
    return dft

########################################################################################################################################################


def private_edit_fft(
    dft: np.ndarray,
    row: int | None = None,
    col: int | None = None,
    is_blur: bool = True,
    freq: float = 0,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
    dft1 = dft
    # https://numpy.org/doc/stable/reference/generated/numpy.where.html
    # https://stackoverflow.com/questions/56594598/change-1s-to-0-and-0s-to-1-in-numpy-array-without-looping
    cx = math.floor(dft.shape[1] / 2)
    cy = math.floor(dft.shape[0] / 2)
    row = get_size(size=row, max_size=cx, default_size=0)
    col = get_size(size=col, max_size=cy, default_size=0)
    mask = np.zeros(dft.shape)
    kernel = kernel_2d(width=row * 2, height=col * 2, mode=mode)
    mask[cx - row : cx + row, cy - col : cy + col] = kernel.T
    if is_blur == True:
        mask = np.where(mask < 1, freq, 1)
    else:
        mask = np.where(mask < 1, 1, freq)
    dft = dft * mask
    if (dft==dft1).all():
        print("SAME")
    else:
        print("CALCULUS")
    return dft


def edit_fft(
    img: np.ndarray,
    row: int,
    col: int,
    is_blur: bool,
    freq: float = 0,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
    dft = get_fft(img)
    #show(get_fft_image(dft), "b dft")
    dft = private_edit_fft(dft=dft, row=row, col=col, freq=freq, mode=mode, is_blur=is_blur)
    #show(get_fft_image(dft), "a dft")
    img = get_ifft(dft)
    img = (255 * img).astype(dtype=np.uint8)
    return img

def fft_blur(
    img: np.ndarray,
    row: int,
    col: int,
    freq: float = 0,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
    return edit_fft(
        img=img, row=row, col=col, freq=freq, mode=mode, is_blur=True
    )


def fft_sharp(
    img: np.ndarray,
    row: int,
    col: int,
    freq: float = 0,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
    return edit_fft(
        img=img, row=row, col=col, freq=freq, mode=mode, is_blur=False
    )

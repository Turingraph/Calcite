import cv2
import numpy as np
from PIL import Image
from utility.save import create_dir, get_valid_path


def show_img(img: np.ndarray, title: str = "img_out") -> None:
    # https://stackoverflow.com/questions/74546171/image-is-too-big-for-opencv-imshow-window-how-do-i-make-it-smaller
    # https://www.geeksforgeeks.org/python-opencv-resizewindow-function/
    cv2.namedWindow(winname=title, flags=cv2.WINDOW_NORMAL)
    cv2.resizeWindow(winname=title, width=500, height=600)
    cv2.imshow(winname=title, mat=img)
    cv2.waitKey(delay=0)
    cv2.destroyAllWindows()

def save_img(
    img: np.ndarray,
    path:str|None,
    absolute:bool = False
) -> None:
    # We don't sure what files that PIL library support.
    # format_options = ( 
        # "jpg", "jpeg", "png",
        # "gif", "bmp", "tiff",
        # "ppm", "ico", "psd"
    # )
    path = get_valid_path(
        path=path,
        absolute=absolute,
        # format_options=format_options,
        # warn_save=warn_save_img()
    )
    create_dir(path=path)
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    """
    We don't sure if Image.fromarray(img).save() or cv2.cvtColor() better.

    File format that cv2.cvtColor() support
    -   Only 8-bit (or 16-bit unsigned uint16 in case of PNG, JPEG 2000, and TIFF) 
    -   https://amroamroamro.github.io/mexopencv/matlab/cv.imwrite.html

    File format that Image.fromarray(img).save() support
    -   JPG and many more image formats.

    Note that
    -   OpenCV is preferred for computer vision tasks and real-time applications.
    -   PIL is more suitable for tasks requiring specialized image processing, metadata manipulation, 
        or compatibility with specific image formats.
    -   https://learningdaily.dev/what-is-the-difference-between-opencv-and-pillow-457e37b7d530

    Recommended additional learning resource.
    -   https://pillow.readthedocs.io/en/stable/reference/Image.html#PIL.Image.Image.save
    -   https://pillow.readthedocs.io/en/stable/handbook/image-file-formats.html
    -   https://amroamroamro.github.io/mexopencv/matlab/cv.imwrite.html

    ChatGPT recommend me to use Pillow over Open CV for better image for better OCR result and allow user 
    to save image in more various formats.
    So we will test if Open CV or Pillow works better after add feature that allow us to evaluating accuracy 
    of OCR output in future version.
    """
    # Plan A
    im = Image.fromarray(img)
    im.save(path)
    # Plan B
    # cv2.imwrite(path, img)

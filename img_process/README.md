The purpose of this folder is to processing the image.

This folder contains
1.  `blur.py`
2.  `contour.py`
-   Purpose : Separate the part of the image based on the group of text as 
        multiple rectangles. This is useful for dealing with image with columns of
        text e.g. bill, table of contents page etc. in the context of OCR.
-   Reference : https://youtu.be/9FCw1xo_s0I?si=nkbaYLAZCLCSGUe5
3.  `fft_2d.txt`
-   This file is the only unusable file in this folder.
    It is intended as FFT based Blur-Sharp Image processing algorithm
4.  `kernel_2d.py`
-   Purpose : Create kernal for image processing
-   Reference : https://youtu.be/KuXjwB4LzSA?si=nWwcArS1IYdI9EC3
5.  `morphology.py`
-   Morphology means the type of image processing algorithm that transform the image based on shape.
-   Purpose : increase or decrease the width of the line, remove noise and transform the image in various ways.
-   Reference : https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html 
6.  `rotate.py`
-   Reference : https://becominghuman.ai/how-to-automatically-deskew-straighten-a-text-image-using-opencv-a0c30aed83df
7.  `show.py`
-   Purpose : Display image with `show` and save output image with `save_img`
8.  `threshold.py`
-   Purpose : Make the clear distinction between background and text in output image.
9.  `utility.py`
10. `zoom.py`
-   Purpose : Get only some part of the image with `remove_borders`, `zoom` and `crop`, and create borders with `create_borders.`

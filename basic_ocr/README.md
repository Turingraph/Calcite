The purpose of this folder is to allow user to use our code easily.

This folder contains only one Python file `basic_ocr.py` with 4 functions.

1.  `get_threshold_img()`
-   Purpose : Transform image to gray image with clearer text to improve OCR result.
2.  `get_ocr()`
-   Purpose : Get one OCR result of one image.
3.  `get_ocr_arr()`
-   Purpose : Get multiple OCR result of one image (type `box_edit`)
4.  `get_box_img()`
-   Purpose : Get image type `box_edit` with user customized text format.

It is recommended to use this function in the following order.

For getting text from simple text format e.g. book etc. use this order.
1.  `get_threshold_img()`
2.  `get_ocr()`

For getting text from complicated text format e.g. bills etc. use this order.
1.  `get_threshold_img()`
2.  `get_box_img()`
3.  `get_ocr_arr()`

Read https://github.com/Turingraph/open_close_rider_lib_tutorial.git for more details.

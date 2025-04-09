This folder contains
1.  `img/`
-   Contains : images
2.  `text/`
-   Contains : text output.
3.  `00_img.py`
-   Purpose :  Transform `img/img.jpeg` as `img/dilate_img13x3.jpg`
4.  `01_box.py`
-   Purpose : Transform `img/img.jpeg` as `img/dilate_img13x3.jpg`, 
    `img/box_img_00.jpg`, `img/box_img_01.jpg` and `img/box_img_02.jpg`
5.  `02_ocr.py`
-   Purpose : Transform `img/img.jpeg` as text output.

Note that it is recommended to
1.  Processing image using `img_process_gray.threshold()` method
2.  Avoid save `.jpeg` image and reuse it, because `.jpeg` files is compressed, which cause less reliable OCR result.
3.  Set `get_ocr(..., conf = 0)` when after preprocessing the image to prevent information lost.

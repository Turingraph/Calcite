This folder contains
1.  `img/`
-   Contains : images
2.  `img_text/`
-   Contains : image output that have text bounding boxes.
2.  `text/`
-   Contains : text output.
4.  `00_img.py`
-   Purpose :  Transform `img.jpeg` to `thick.jpg` and `thresh.jpg`
5.  `01_ocr.py`
-   Purpose : Transform `thick.jpg` and `thresh.jpg` to text output and `img_text/` output.
6.  `basic.py`
-   Purpose : Check if `basic_ocr/` works as expected.

The `thresh.jpg` is slightly more reliable than `thick.jpg`.

Reference
1.  https://youtu.be/ADV-AjAXHdc?si=pbCm__vFPVl25u6v
2.  https://youtu.be/4uWp6dS6_G4?si=c1YB_dlOxADa-iUK

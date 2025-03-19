This folder contains
1.  `img/`
-   Contains : image input (`img.jpg`) and output of `include/img_process_gray.tsx`
2.  `text/`
-   Contains : output of `include/ocr_config.tsx`
3.  `00_img.py`
-   Purpose : Transform `img.jpg` for another files.
4.  `01_boxes.py`
-   Purpose : Check if `include/boxes_img.tsx` works as expected.
5.  `02_ocr.py`
-   Purpose : Check if `include/ocr_confg_arr.tsx` works as expected.
6.  `03_bocrs.py`
-   Purpose : Check if `include/boxes_img.tsx` and `include/ocr_confg_arr.tsx` work together as expected.
7.  `04_nocrs.py`
-   Purpose : Check if `include/ocr_confg_arr.tsx` works with `np.ndarray` array input as expected.

The purpose of this folder is to be the interface of `img_process/`

This folder contains
1.  `hello_world.py`
-   Purpose : Check if we import coding file from `img_process_class/` to `tests/` correctly.
2.  `img_process_gray.py`
-   Purpose : Allow user to editing the gray image with `img_process` methods and additional image processing related methods for improving OCR result.
3.  `img_process_rgb.py`
-   Purpose : Allow user to editing the colorful image with `img_process` methods.
4. `img_process.py`
-   Purpose : Parent class of `img_process_rgb` and `img_process_gray`, for editing the image with basic image processing method.
-   Contains: Basic image processing command e.g. `show`, `save_img`, `shape`, `zoom` etc.
-   Warning : It is not recommended to use `img_process` class because the Constructor of `img_process` does not check if `img` argument valid or not.
-   Note : `img_process` is the only class with 2 inherited child classes, `img_process_rgb` and `img_process_gray`. Both child classes do not overwrite any parent's methods.

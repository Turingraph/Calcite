# What is `layout/` ?

`layout/` contains the UI components that are composed by `components/` files for this specific OCR project.

This folder contains 4 sub folders.
1.  `box/`
-   Purpose: for drawing the box around the text inside the image.
2.  `img/`
-   Purpose: for preprocessing the image before get text from the image.
3.  `ocr/`
-   Purpose: for getting text from the image using Tesseract OCR model.
4.  `utility/`
-   Purpose: for other purpose. In this case it store one file which is `input_arr.tsx` which used for display and store multiple image input pair with ocr output.

Note that
1.  `obj` means object (a.k.a. input data and/or output data).
2.  `edit` means to edit the object data
3.  `config` means to the data which is used for specify the `edit` setting. It can be saved and reused as JSON files.
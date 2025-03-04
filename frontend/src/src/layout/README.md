# What is `layout/` ?

`layout/` contains the UI components that are composed by `components/` files for this specific OCR project.

This folder contains 4 sub folders.
1.  `box/`
-   Purpose: for drawing the box around the text inside the image.
2.  `img/`
-   Purpose: for preprocessing the image before get text from the image.
3.  `ocr/`
-   Purpose: for getting text from the image using Tesseract OCR model.
4.  `their/`
-   Purpose: for storing user's input and output data (e.g. images, processed images and ocr text output)

Note that
1.  `obj` means object (a.k.a. input data and/or output data).
2.  `edit` means to edit the object data
3.  `save` means to save and/or open the reusable data which is used for specify the `edit` setting. It can be saved and reused as JSON files and allow user to import input and export output data.
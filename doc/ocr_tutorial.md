# Introduction

OCR (Optical Character Recognition) is the process of converting input image with text to text output.

Tesseract is the OCR ML model that is used for converting input image with text to text output.

Pytesseract is the Python library that allow user to use Tesseract via Python script.

# Workflow

How to use OCR tool ?
1.	Preprocessing Image
*	In order to make the OCR output more accurate. 
*	Handle: `include/img_process_img.py`, `include/img_process_gray.py`
2.	Detect orientation and script
*	Detect how tilt and language the text is and adjust it accordingly.
*	Handle: `include/img_to_str_osd.py`
3. 	Character Location
*	Use OCR model to draw boxes around the selected text in the input image.
*	pytesseract.image_to_boxes    # boxes around characters
*	pytesseract.image_to_data     # boxes around words
*	Handle: `include/img_to_str_boxes.py`
4.	Page Segmentation Method
*	Select Tesseract OCR mode.
*	Handle: `include/img_to_str.py`
5.	Text template matching
*	Get the specific text or get every text from the selected input image.
*	Handle: `include/img_to_str_temp.py`
6.	Generate output file
*	Write text from the image, inside txt or csv output file.
*	Handle: `include/img_to_str.py`
7. Export output text file as txt, csv or pdf.
*	Handle: `include/get_data.py`

# How to download Tesseract and Pytesseract ?

See `doc/tesseract_ocr_installation.md` for more detail.

Note that `doc/tesseract_ocr_installation.md` (a.k.a. `doc/__tesseract_ocr_installation.md`) is under the development. 
So if anyone want to contribute our project, you can write Tesseract OCR Installation document as `doc/tesseract_ocr_installation.md` file for us. 
Thank you for your contribution

# How to activate Tesseract in CLI ?

CLI script
* `$ tesseract my_img.png stdout --psm 0 -l eng`
* `$ tesseract my_img.png stdout --oem 3 --psm 0 -l eng`

Note that
* User can write any name of available input image, instead of `my_img.png`
* The available options are `'--psm' + str(i)`, where `i in [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]`
* `--oem` (OCR Engine Mode) means the algorithm options. The default option is 3.

See https://stackoverflow.com/questions/58148626/tesseract-options-image-preprocessing to learn about the available parameters of tesseract command.

# How to activate Tesseract in Python ?

```
my_lang = 'eng' 
# 'eng' is the default language.
# my_lang = 'eng + tha' # to get both English and Thai language OCR output.

# URL list
# 1. List of all available languages in Tesseract OCR model
# * https://tesseract-ocr.github.io/tessdoc/Data-Files-in-different-versions.html 
# 2. This tutorial teaches how to change language output of Tesseract OCR model.
# * https://tesseract-ocr.github.io/tessdoc/Command-Line-Usage.html

my_config = '--psm 3' 
# or my_config = '--oem 1 --psm 3' 
# The default option is '-l eng --oem 3 --psm 3'
# The available options are '--psm' + str(i), where i in [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
# See /doc/OCR_PSM_Tutorial.md to learn more about each PSM option.

out = pytesseract.image_to_string(
    im, 
    lang = my_lang, 
    config = my_config
    )
print(out)
```

# Limitation of Tesseract OCR.

1. Tesseract might create wrong or empty output if user use wrong PSM mode for the given circumstance.
2. Tesseract might create output with spelling and/or grammar mistake.
3. Tesseract cannot know the language of the text inside the image.
4. Tesseract unable to create the reliable text output of the image, if the image has unclear text and is not processed properly.
5. User can only use Pytesseract after install Tesseract.

# List of recommended free Resource for learning how to use Pytesseract in Python.

1. OCR in Python (YouTube playlist)
* This YouTube playlist teaches how to preprocess the image (of book page and index page), the extract text from the image.
* https://www.youtube.com/watch?v=tQGgGY8mTP0&list=PL2VXyKi-KpYuTAZz__9KVl1jQz74bDG7i
2. OCR Tutorial Website
* This YouTube playlist teaches how to preprocess the image, the extract text from the image, make the text bounding box and select some text inside the input image.
* https://nanonets.com/blog/ocr-with-tesseract/

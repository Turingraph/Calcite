
"""
Title : Detect in multiple languages

Unfortunately tesseract does not have a feature to detect language of the text in an image automatically. 
An alternative solution is provided by another python module called `langdetect` which can be installed via pip.

```
$ pip install langdetect
```

The best way to do this is by first using tesseract to get OCR text in whatever languages you might feel are in there, 
using `langdetect` to find what languages are included in the OCR text and then run OCR again with the languages found.

```
custom_config = r'-l eng+por --psm 6'
txt = pytesseract.image_to_string(img, config=custom_config)

from langdetect import detect_langs
detect_langs(txt)

# [en:0.714282468983554, es:0.2857145605644145]
```

Note - Tesseract performs badly when, in an image with multiple languages, 
the languages specified in the config are wrong or aren't mentioned at all. 
This can mislead the langdetect module quite a bit as well.

Reference
-   https://nanonets.com/blog/ocr-with-tesseract/
"""

def lang_detect(text:str):
    pass

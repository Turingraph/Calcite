The purpose of this folder is to apply NLP model to improve OCR result e.g. spelling correction, language detection, separate text with valid spacing etc.

It contains 2 sub folders
1.  `class/`
-   Contain : Python Class interface files of `spell/` and `text_segment/`. Each file specialized in only one language e.g. `class/eng.py` and `class/tha.py`.
2.  `many_langs/`
-   Contain : Python NLP files that works with multiple or a single languages.
3.  `spell/`
-   Contain : Multiple Python files that correcting the spelling of each word. Each file specialized in only one language.
4.  `text_segment/`
-   Contain : Multiple Python files that separate string in to multiple sub-string with valid segmentation based on spacing and/or word. Each file specialized in only one language.

# What is library ?

Library is the code that unable to execute task on it own, but can be applied with other software, such that developers don't have to waste their time rewrite code.

# What is `pip` ?

`pip` is Package Manager for Python files. It help developers to manage, install, update and delete Python library.

# What is `.venv\` ?

`.venv\` (a.k.a. Python virtual environment) is the directory that contains library e.g. Pytesseract, numpy etc that is downloaded and updated by `pip` automatically.

# What is `.gitignore` ?

`.gitignore` is file that control which files are ignored by Git, in order to avoid using unnecessary memory.

It is recommended to include `.venv` in `.gitignore` and use `requirements.txt` to specify which library to download instead.

In `.gitignore` file

```
# Ignore .venv
.venv
```

# Python command

How to create `.venv\` ?
* `python3 -m venv .venv`

How to activate `.venv\` ?
* `source .venv/bin/activate` 

How to install package from requirements.txt ?
* `pip install -r requirements.txt`

How to create `requirements.txt` file ?
* `pip freeze > requirements.txt`

How to create `requirements.txt` file that only include used package ?
* `pipreqs --force`

# Reference

1. How To Create & Activate A Virtual Environment In Visual Studio Code (Python 3.12)
* https://youtu.be/hC5rfoIY8nU?si=uvCDjfqX31QCOUs3
2. How to use requirements.txt file ?
* https://youtu.be/BXPzbH0LYz4?si=MPzdJpAeTWfopQlI

# Introduction

This file is used for documenting about other additional information and coding tutorial.

# How to solve pip install error This environment is externally managed ?

Sometimes, when `pip install` Python package in Ubuntu, you might get this error

```
(.venv) pc@pc-System-Product-Name:~/Desktop/JOCR/tests/00_page$ pip install cv2
error: externally-managed-environment

× This environment is externally managed
╰─> To install Python packages system-wide, try apt install
    python3-xyz, where xyz is the package you are trying to
    install.
    
    If you wish to install a non-Debian-packaged Python package,
    create a virtual environment using python3 -m venv path/to/venv.
    Then use path/to/venv/bin/python and path/to/venv/bin/pip. Make
    sure you have python3-full installed.
    
    If you wish to install a non-Debian packaged Python application,
    it may be easiest to use pipx install xyz, which will manage a
    virtual environment for you. Make sure you have pipx installed.
    
    See /usr/share/doc/python3.12/README.venv for more information.

note: If you believe this is a mistake, please contact your Python installation or OS distribution provider. You can override this, at the risk of breaking your Python installation or OS, by passing --break-system-packages.
hint: See PEP 668 for the detailed specification.
```

## What does this message means ?

The Linux is trying to preventing user from mixing other packages e.g. `apt` etc, with pip packages.

## How to solve this issue

```
If you wish to install a non-Debian-packaged Python package,
create a virtual environment using python3 -m venv path/to/venv.
Then use path/to/venv/bin/python and path/to/venv/bin/pip. Make
sure you have python3-full installed.
```

1.  `python3 -m venv .venv`
2.  `source .venv/bin/activate`
3.  `python3 -m pip install -r requirements.txt` (for install all package that are noted in `requirements.txt`)
3.  `python3 -m pip install cv2` for install only one package.

Reference
*   How to solve pip install error This environment is externally managed.
*   https://youtu.be/5jsr42KIh34?si=hj4LoikKcGRS66u7

# What is Open Closed Principle and why it is important for coding project ?

-   It is the coding guidance concept where it is recommended to code, such that programmer can
  add new feature to the code without modifying the existing code, 
  in order to avoid wasting time on rewrite the code and make unexpected bugs.
-   The likely consequences of poor Open Closed code are Shotgun Surgery smell and Divergent Change smells.

You can learn more about Open Closed Principle and related concepts in this URL list.
1.  Open Closed Principle
-   https://www.freecodecamp.org/news/open-closed-principle-solid-architecture-concept-explained/
2.  Shotgun Surgery
-   https://refactoring.guru/smells/shotgun-surgery
3.  Divergent Change 
-   https://refactoring.guru/smells/divergent-change
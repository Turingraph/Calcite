from ocr.flag_options import get_oem, get_psm
from ocr.img_to_str import img_to_str
from pytesseract import Output
from ocr.osd import osd
from ocr.save_text import save_text
import numpy as np
from include.img_process_rgb import img_process_rgb
from include.img_process_gray import img_process_gray

class ocr:
    def __init__(
            self,
            lang:str = "eng",
            psm:str|int|None = 3,
            oem:str|int|None = 3,
            timeout:int = 0,
            config:str = ''
            ):
        self.out = ''
        self.lang = lang
        self.psm = get_psm(psm)
        self.oem = get_oem(oem)
        self.timeout = timeout
        self.config = config

    def img_to_str(self, img:np.ndarray|img_process_rgb|img_process_gray)-> None:
        if isinstance(img, img_process_rgb) or isinstance(img, img_process_gray):
            img = img.img
        self.out = ''
        self.out = img_to_str(
                        img=img,
                        lang = self.lang,
                        config=self.psm + ' ' + self.oem + ' ' + self.config,
                        timeout=self.timeout
                    )

    def save_text(self, path: list[str] | str = ["str_out", "str_out", "txt"])-> None:
        save_text(self.out, path)

    def osd(self, img:np.ndarray|img_process_rgb|img_process_gray, out_type:str = Output.STRING) -> any:
        if isinstance(img, img_process_rgb) or isinstance(img, img_process_gray):
            img = img.img
        return osd(img=img, out_type=out_type, timeout=self.timeout)

import numpy as np
from img_process.rotate import rotate
from img_process.show import save_img, show_img
from img_process.zoom import create_borders, crop, remove_borders, zoom


class img_process:
    def __init__(self, img: any):
        self.img:any = img
    ########################################################################################################################################################
    # read img
    # img_process/show.py

    def show_img(self, title: str = "img_out") -> None:
        show_img(img=self.img, title=title)

    def save_img(
        self,
        path:str = "img/img_out.jpg",
        absolute:bool = False
    ) -> None:
        save_img(
            img=self.img, 
            path=path,
            absolute=absolute)

    def shape(self) -> tuple:
        if isinstance(self.img, np.ndarray):
            return self.img.shape
        return (0, 0)

    ########################################################################################################################################################
    # edit img
    # img_process/(zoom.py, rotate.py)

    def zoom(self, scale: int = 1) -> None:
        self.img = zoom(img=self.img, scale=scale)

    def remove_borders(self) -> None:
        self.img = remove_borders(img=self.img)

    def crop(
        self,
        x: int | None = None,
        y: int | None = None,
        w: int | None = None,
        h: int | None = None,
    ) -> None:
        self.img = crop(img=self.img, x=x, y=y, w=w, h=h)

    def create_borders(self, size: int = 50) -> None:
        self.img = create_borders(img=self.img, size=size)

    def rotate(self, angle: int | None = None) -> None:
        self.img = rotate(img=self.img, angle=angle)

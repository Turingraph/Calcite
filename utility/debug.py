
def are_2_imgs_same(img_00:str, img_01:str):
    # https://stackoverflow.com/questions/34669068/
    # how-to-verify-that-two-images-are-exactly-identical
    if open(img_00,"rb").read() == open(img_01,"rb").read():
        return True
    return False

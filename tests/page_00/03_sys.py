import os 

my_path = os.path.join("img","cheche","tata","ocr.txt")

if not os.path.exists(path=my_path):
    os.makedirs(name=my_path)

import os

# https://stackoverflow.com/questions/2690324/
# list-directories-and-get-the-name-of-the-directory

ls = [name for name in os.listdir(".") if os.path.isdir(name)]
ls = sorted(ls)
clean_ls = []
i = 0
while i < len(ls):
    clean_ls.append(ls[i][:-3])
    i += 2

for i in clean_ls:
    print(i)
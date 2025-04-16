# https://stackoverflow.com/questions/13032701/
# how-to-remove-folders-with-a-certain-name

# https://askubuntu.com/questions/217893/
# how-to-delete-a-non-empty-directory-in-terminal

find . -type d -name text -exec rm -R {} \;

# What is Environment Variable ?

The variable that can only accessed in local environment. Example are the user password etc.

# Environment Variable command

## How to print all Environment Variables ?

-   `env`

## How to print selected Environment Variables ?

-   `printenv` somethings
-   `echo $` somethings

## How to access Environment Variables in Shell script ?

-   `$` somethings

## How to set Environment Variable temporary ?

-   `export `name`=`value

## How to set Environment Variable permanently ?

1.  `nano .bashrc`
2.  `export `name`=`value
3.  Ctrl+S
4.  Ctrl+X
5.  source .bashrc

## How to remove Environment Variable temporary ?

-   `unset `name`

# What you should avoid ?

-   Avoid using `$` inside Environment Variable names

# Reference

-   Linux for Programmers #7 | Environment Variables
-   https://youtu.be/yM8v5i2Qjgg?si=S04JFdzXG06232U1

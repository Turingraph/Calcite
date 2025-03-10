# How to install eslint ?

1.  Download ESLint in VSCode Extensions.
2.  `npm install -g eslint`
3.  `./node_modules/.bin/eslint --init`

```
$ ./node_modules/.bin/eslint --init
You can also run this command directly using 'npm init @eslint/config'.

> frontend@0.1.0 npx
> create-config

@eslint/create-config: v1.5.0

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-react
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...

up to date, audited 1383 packages in 60s

279 packages are looking for funding
  run `npm fund` for details

12 vulnerabilities (6 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
Successfully created /home/pc/Desktop/Calcite/frontend/eslint.config.mjs file.
```

Then use upper arrow, down arrow and enter key to answer the following questions.

4.  `$./node_modules/.bin/eslint . --init`

Reference
1.  How to use ESLint in VSCode for JavaScript projects
-   https://youtu.be/q_dovvXfw1c?si=sl88TcAPxFxszvIR
2.  Sh command not found eslint and other commands installed via npm.
-   https://stackoverflow.com/questions/73708932/zsh-command-not-found-eslint-and-other-commands-installed-via-npm

# How to activate eslint ?

`$./node_modules/.bin/eslint . --fix`

# How to remove eslint ?

1.  `npm uninstall eslint --save`
2.  Remove `eslint.config.mjs`

Reference
-   https://codedthemes.gitbook.io/berry/how-to/remove-eslint

# How to turn off eslint in specific file ?

```
/* eslint-disable */
// ...
```

Reference
-   https://stackoverflow.com/questions/34764287/turning-off-eslint-rule-for-a-specific-file

# How to turn off eslint in specific line of code ?

```
// eslint-disable-next-line 
// ...
```

Reference
-   https://stackoverflow.com/questions/27732209/turning-off-eslint-rule-for-a-specific-line

# How to solve Eslint related issue ?

It is recommended to remove Eslint and `$./node_modules/.bin/eslint . --init`,
if there is the unexpected issue againt, try to Google it.

The ChatGPT's advide when encounter the similar issue is to
1.  Remove and reinstall dependency
2.  Avoid using and setting `.eslintrc.json` for no reason.

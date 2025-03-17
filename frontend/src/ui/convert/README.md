`convert/` is the folder that transform one type of input to the expected output.
It also allow us to access the item of the array based on the certain value e.g. search `a.attr_value<t>[]` based on `value` using `value_to_varr` etc.

Rule of every function in this `convert/`
1.  It should have `_to_` at the middle of the name or begin with `check_` to check the type.
2.  It should be used for convert variable to get valid output
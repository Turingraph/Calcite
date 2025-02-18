# What is the difference between `any` and `unknown`

any = any type
unknown = unknown type

any allow the user to use the any type variable in any unrestricted way.

unknown treat the unknown type variable as variable with unknown type and only
allow the user to use it such that it is consistence with the first initialized 
value.

```
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
```

Reference
*   https://stackoverflow.com/questions/51439843/unknown-vs-any

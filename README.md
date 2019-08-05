# Smioll

## This is an interpreter built by  [drew-y](https://github.com/drew-y/smol)

To use(assuming you have Typescript)
Inside source folder do the following:

1. tsc -t ES2017 -m commonjs evaluate.ts --outDir dist
    I am assuming that you have this, dist, already created.
2. node example.js
    Make sure that the module inside eaxample points to the right file.

```javascript
let x = 1;
let y = 7;

let do_math = |x, y| {
    let add = |a, b| { a + b };

    print("x + y:");
    print(add(x, y));

    if y > 3 {
        print("y is greater than 3");
    }

    return add(x, y);

};

do_math(x, y);
```
### I didn't do much except typing out the code from the blog, and minor refining.
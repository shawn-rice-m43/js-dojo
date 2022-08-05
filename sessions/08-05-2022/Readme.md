# 08 05 2022

Objects: Needle in a haystack

Write a function `contains` that determines if an Object (the haystack) has a given value (the needle) regardless of how many levels deep the value is stored.

For the sake of the exercise, the needle will only be a string, number, or boolean.

Extra credit: what if we needed to detect an array or object?

```
const exampleObject = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: 'bar',
                        g: 55
                    }
                }
            }
        }
    },
    b: 'foo',
}

contains(exampleObject: 'foo') => true;
contains(exampleObject, 'bar') => true;
contains(exampleObject, true) => false;
```

# Performance
The original code was extremely “dynamic,” which is difficult for the JavaScript engine (V8) to optimize.
In hot code paths (many validations per second), a reduction in CPU load for validations of 50 to 80% can now be observed.
In addition, there is a speed gain of two to ten times faster execution times.

### Static structure vs. dynamic loops
Previously, functions were bound to an object at runtime via `keys.forEach`. The new version uses statically defined methods.
The V8 engine can inline these (embed them directly into the calling code), which eliminates the overhead of the function call.

### Elimination of `util.format`
The old version used `util.format` for every error message.
This function parses strings, which makes it very slow.
The new version uses template strings, which are native and lightning fast.

### Optimized iteration
Switching from `.forEach()` (one function call per element) to `for...of` (internal iterator) saves a ton of time with large arrays.
For an arrayItemTypeCheck with 1000 elements, that means 1000 fewer call stack operations.

### V8 monomorphism
Since every assertion function now always has the same form and is not generated dynamically,
the JIT compiler can generate highly efficient machine code.
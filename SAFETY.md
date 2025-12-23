# Security (runtime & compile-time)
This is where the biggest qualitative improvement has been made, alongside performance.

### Elimination of `caller`
The old version used caller, which causes crashes in “strict mode” (standard in modern TS/JS).
The new version is runtime-safe.

### Strict primitive checks
The use of `Number.isFinite` and `Number.isNaN` instead of global functions prevents fatal errors
in implicit type conversions (e.g., `isFinite(“ ”)` used to be `true`, which is incorrect).

### Type guarding & assertions
With the introduction of TypeScript, all arguments are now type-safe.
Thanks to `asserts arg is T`, the compiler “understands” the booleanCheck.
An error such as `x.toLowerCase()` on a potential `null` value is flagged as soon as it is typed in the editor.

### UUID security
Explicit checking and the avoidance of complex, backward-looking regex patterns minimize the risk
of ReDoS (Regular Expression Denial of Service).
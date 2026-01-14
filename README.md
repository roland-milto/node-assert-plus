[Zu Deutsch wechseln](README.de.md)

# [`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus)

![NPM version](https://img.shields.io/npm/v/@argument-assertions/node-assert-plus?color=blue)
![Typescript project](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![ESM supported](https://img.shields.io/badge/ESM-supported-brightgreen)

## What is `node-assert-plus`?

`@argument-assertions/node-assert-plus` is a 
modern and secure **assertion library** written in TypeScript by [Roland Milto](https://roland.milto.de/), designed as 
an enhanced implementation of Node’s built-in [`node:assert/strict`](https://nodejs.org/api/assert.html).

It is a fork of the original [`assert-plus`](https://www.npmjs.com/package/assert-plus) library, which is no longer 
maintained and has several security and performance issues. This new library from 2026 is up to **ten times faster** 
than the original `assert-plus`, while **reducing** CPU and memory usage by **50–80%**.

Type guarding and strict primitive checks have been added, and problematic features such as `caller` have been removed 
to ensure compatibility with **Strict Mode**.

More details:
- [SAFETY.md](SAFETY.md)
- [PERFORMANCE.md](PERFORMANCE.md)

[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) simplifies 
testing by offering a broad set of ready-to-use assertions. As a simple example:

```js
import { assert } from '@argument-assertions/node-assert-plus';

process.env.NODE_ENV = 'development';

function checkAccountDetails(options, callback)
{
  assert.plainObject(options, 'options');
  assert.integer(options.id, 'options.id');
  assert.string(options.name, 'options.name');
  assert.arrayOfString(options.email, 'options.email');
  assert.object(options.dateObject, 'options.dateObject');
  assert.boolean(options.isManager, 'options.isManager');
  assert.number(options.process, 'options.process');
  assert.function(callback, 'callback');

  // Do whatever you want with the account details!
  callback(null, {});
}
```

<br>

## What is also new?

### Thirty-six new assertions
| Type check              | Optional checks                | Check items in an isArray     | Check items in an isArray (optional)  |
|-------------------------|--------------------------------|-------------------------------|---------------------------------------|
| assert.bigInt           | assert.optionalBigInt          | assert.arrayOfBigInt          | assert.optionalArrayOfBigInt          |
| assert.integer          | assert.optionalInteger         | assert.arrayOfInteger         | assert.optionalArrayOfInteger         |
| assert.null             | assert.optionalNull            | assert.arrayOfNull            | assert.optionalArrayOfNull            |
| assert.nullOrUndefined  | assert.optionalNullOrUndefined | assert.arrayOfNullOrUndefined | assert.optionalArrayOfNullOrUndefined |
| assert.plainObject      | assert.optionalPlainObject     | assert.arrayOfPlainObject     | assert.optionalArrayOfPlainObject     |
| assert.promise          | assert.optionalPromise         | assert.arrayOfPromise         | assert.optionalArrayOfPromise         |
| assert.symbol           | assert.optionalSymbol          | assert.arrayOfSymbol          | assert.optionalArrayOfSymbol          |
| assert.undefined        | assert.optionalUndefined       | assert.arrayOfUndefined       | assert.optionalArrayOfUndefined       |
| assert.ValidDate        | assert.optionalValidDate       | assert.arrayOfValidDate       | assert.optionalArrayOfValidDate       |


### Aliases for `bool`, `func` and `regexp`

The following aliases have been added to the existing assertions and can be used instead of the initial names.

#### Forced (value must exist)
| New method alias  | Original        | - | New array-method alias   | Original                |
|-------------------|-----------------|---|--------------------------|-------------------------|
| `assert.boolean`  | `assert.bool`   | - | `assert.arrayOfBoolean`  | `assert.arrayOfBool`    |
| `assert.function` | `assert.func`   | - | `assert.arrayOfFunction` | `assert.arrayOfFunc`    |
| `assert.regEx`    | `assert.regexp` | - | `assert.arrayOfRegEx`    | `assert.arrayOfRegexp`  |

#### Optional (value can be `undefined` or `null`)
| New method alias          | Original                | - | New array-method alias           | Original                       |
|---------------------------|-------------------------|---|----------------------------------|--------------------------------|
| `assert.optionalBoolean`  | `assert.optionalBool`   | - | `assert.optionalArrayOfBoolean`  | `assert.optionalArrayOfBool`   |
| `assert.optionalFunction` | `assert.optionalFunc`   | - | `assert.optionalArrayOfFunction` | `assert.optionalArrayOfFunc`   |
| `assert.optionalRegEx`    | `assert.optionalRegexp` | - | `assert.optionalArrayOfRegEx`    | `assert.optionalArrayOfRegexp` |

---

## Legacy Projects

For legacy codebases that still rely on [`assert-plus`](https://www.npmjs.com/package/assert-plus),  
[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) can be 
used as a compatible drop-in replacement.

For new projects that require a stable assertion library with an extended feature set,  
consider using [`@type-check/assertions`](https://www.npmjs.com/package/@type-check/assertions).

It offers a modern and secure design, a broader range of functionality, 
a minimal bundle size, is straightforward to use and is well-documented.

The outdated `process.env.NODE_NDEBUG` has been replaced by the modern `process.env.NODE_ENV`.
This must be adjusted accordingly in your code.

<br>

## How to use `@argument-assertions/node-assert-plus`?

### Installation via command line

```bash
npm install @argument-assertions/node-assert-plus
```

### package.json

Ensure that `@argument-assertions/node-assert-plus` is included in your `package.json` dependencies and always use the latest version:

```json
{
  "dependencies": {
    "@argument-assertions/node-assert-plus": "*"
  }
}
```

### tsconfig.json

Since `@argument-assertions/node-assert-plus` is exported as an ESM module, it is necessary to
adjust the `moduleResolution` option in the `tsconfig.json` file
to avoid error messages from the TypeScript compiler:

```json
{
  "compilerOptions": {
    "moduleResolution": "NodeNext"
  }
}
```

### Import

Use `@argument-assertions/node-assert-plus` as local import:

```js
import { assert } from '@argument-assertions/node-assert-plus';
```

Use `@argument-assertions/node-assert-plus` as global import, so you need to include it *only once* in your project:

```js
import '@argument-assertions/node-assert-plus/register-global';
```

### Usage
All methods that *are not* part of Node’s core `assert` API are assumed to take the **value** to validate followed by a 
string **label**, e.g. `assert.FUNCTIONNAME(value, label)`.
This label is not interpreted as a message.

```js
process.env["NODE_ENV"] = 'development';          // Can be *any* string to enable strict mode

assert.integer(42, "my integer success label");   // Success
assert.string("foo", "my string success label");  // Success

assert.integer(42.4, "my integer failure label"); // Failure, maybe you should use assert.number instead? ;)
assert.string(54545, "my string failure label");  // Failure

let strings = ['Roland', 'Milto', 'from', 'Germany'];
assert.arrayOfString(strings, 'good strings');    // Success

strings.push(42);
assert.arrayOfString(strings, 'bad strings');     // Failure

process.env["NODE_ENV"] = 'production'            // Set to 'production' to disable strict mode

assert.plainObject(new Date(), "date");           // Will be ignored in production mode
```

The best way is to control the development mode via the environment variables of 
the code editor (e.g., WebStorm, Visual Studio Code, etc.).

It is enough not to set `process.env.NODE_ENV` in order for production mode to be recognized.
Assertions can be disabled any time with `process.env.["NODE_ENV"] = "production"`.
Any value in `process.env.NODE_ENV` activates the mode.


### What does it look like if a condition fails?

```js
let meaningOfLife = 42.4;
assert.integer(meaningOfLife, "meaningOfLife label");
```

Will fail, because *42.4* is not an integer.
The output will be an `AssertionError` with the following message:

```bash
AssertionError [ERR_ASSERTION]: At "meaningOfLife label" type of "integer" is required.
at new AssertionError (node:internal/assert/assertion_error:369:5)
at toss (file:///C:/@argument-assertions/node-assert-plus/dist/utils/toss.js:19:11)
at Object.integer (file:///C:/@argument-assertions/node-assert-plus/dist/caller/typeCheck.js:88:13)
at file:///C:/@argument-assertions/node-assert-plus/tests/test.mjs:11:8
at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:547:26)
at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: 'number',
  expected: 'integer',
  operator: '==='
}
```

<br>

## Methods

**Two parameters** are always passed for single value checks and array checks.
The **first parameter** specifies what is to be checked (value or an array of values).
The **second parameter** specifies the label to be used in the error message.

```ts
const value = 42;
const label = "my integer success label";

// Example of single value check:
assert.integer(value, label);

// Example of array check:
const array = [1, 2, 3];
assert.arrayOfInteger(array, label)
```

### Required Assertions

| Single Value Check     | Array Check                   | Short Description                            |
|------------------------|-------------------------------|----------------------------------------------|
| assert.array           | assert.arrayOfArray           | Checks if value(s) is an array.              |
| assert.bigint          | assert.arrayOfBigInt          | Checks if value(s) is a bigint.              |
| assert.boolean         | assert.arrayOfBoolean         | Checks if value(s) is a boolean.             |
| assert.bool            | assert.arrayOfBool            | Alias for boolean check.                     |
| assert.buffer          | assert.arrayOfBuffer          | Checks if value(s) is a buffer.              |
| assert.date            | assert.arrayOfDate            | Checks if value(s) is a date object.         |
| assert.finite          | assert.arrayOfFinite          | Checks if value(s) is a finite number.       |
| assert.function        | assert.arrayOfFunction        | Checks if value(s) is a function.            |
| assert.func            | assert.arrayOfFunc            | Alias for function check.                    |
| assert.integer         | assert.arrayOfInteger         | Checks if value(s) is an integer.            |
| assert.null            | assert.arrayOfNull            | Checks if value(s) is exactly `null`.        |
| assert.nullOrUndefined | assert.arrayOfNullOrUndefined | Checks if value(s) is `null` or `undefined`. |
| assert.number          | assert.arrayOfNumber          | Checks if value(s) is a number.              |
| assert.object          | assert.arrayOfObject          | Checks if value(s) is an object.             |
| assert.plainObject     | assert.arrayOfPlainObject     | Checks if value(s) is a plain object ({}).   |
| assert.promise         | assert.arrayOfPromise         | Checks if value(s) is a promise.             |
| assert.regexp          | assert.arrayOfRegexp          | Checks if value(s) is a regular expression.  |
| assert.regEx           | assert.arrayOfRegEx           | Alias for regexp check.                      |
| assert.stream          | assert.arrayOfStream          | Checks if value(s) is a stream.              |
| assert.string          | assert.arrayOfString          | Checks if value(s) is a string.              |
| assert.symbol          | assert.arrayOfSymbol          | Checks if value(s) is a symbol.              |
| assert.undefined       | assert.arrayOfUndefined       | Checks if value(s) is exactly `undefined`.   |
| assert.uuid            | assert.arrayOfUuid            | Checks if value(s) is a valid UUID.          |
| assert.validDate       | assert.arrayOfValidDate       | Checks if value(s) is a valid date object.   |

### Optional Assertions

| Single Value Check (optional)  | Array Check (optional)                | Short Description                                       |
|--------------------------------|---------------------------------------|---------------------------------------------------------|
| assert.optionalArray           | assert.optionalArrayOfArray           | Optionally checks if value(s) is an array.              |
| assert.optionalBigInt          | assert.optionalArrayOfBigInt          | Optionally checks if value(s) is a bigint.              |
| assert.optionalBoolean         | assert.optionalArrayOfBoolean         | Optionally checks if value(s) is a boolean.             |
| assert.optionalBool            | assert.optionalArrayOfBool            | Alias for optional boolean check.                       |
| assert.optionalBuffer          | assert.optionalArrayOfBuffer          | Optionally checks if value(s) is a buffer.              |
| assert.optionalDate            | assert.optionalArrayOfDate            | Optionally checks if value(s) is a date object.         |
| assert.optionalFinite          | assert.optionalArrayOfFinite          | Optionally checks if value(s) is a finite number.       |
| assert.optionalFunction        | assert.optionalArrayOfFunction        | Optionally checks if value(s) is a function.            |
| assert.optionalFunc            | assert.optionalArrayOfFunc            | Alias for optional function check.                      |
| assert.optionalInteger         | assert.optionalArrayOfInteger         | Optionally checks if value(s) is an integer.            |
| assert.optionalNull            | assert.optionalArrayOfNull            | Optionally checks if value(s) is exactly `null`.        |
| assert.optionalNullOrUndefined | assert.optionalArrayOfNullOrUndefined | Optionally checks if value(s) is `null` or `undefined`. |
| assert.optionalNumber          | assert.optionalArrayOfNumber          | Optionally checks if value(s) is a number.              |
| assert.optionalObject          | assert.optionalArrayOfObject          | Optionally checks if value(s) is an object.             |
| assert.optionalPlainObject     | assert.optionalArrayOfPlainObject     | Optionally checks if value(s) is a plain object.        |
| assert.optionalPromise         | assert.optionalArrayOfPromise         | Optionally checks if value(s) is a promise.             |
| assert.optionalRegexp          | assert.optionalArrayOfRegexp          | Optionally checks if value(s) is a regular expression.  |
| assert.optionalRegEx           | assert.optionalArrayOfRegEx           | Alias for optional regexp check.                        |
| assert.optionalStream          | assert.optionalArrayOfStream          | Optionally checks if value(s) is a stream.              |
| assert.optionalString          | assert.optionalArrayOfString          | Optionally checks if value(s) is a string.              |
| assert.optionalSymbol          | assert.optionalArrayOfSymbol          | Optionally checks if value(s) is a symbol.              |
| assert.optionalUndefined       | assert.optionalArrayOfUndefined       | Optionally checks if value(s) is exactly `undefined`.   |
| assert.optionalUuid            | assert.optionalArrayOfUuid            | Optionally checks if value(s) is a valid UUID.          |
| assert.optionalValidDate       | assert.optionalArrayOfValidDate       | Optionally checks if value(s) is a valid date object.   |


### Strict Node.js assertions

In addition to these checks, all methods provided by `node:assert/strict` are available, e.g.:

* [assert.deepEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertdeepequalactual-expected-message)
* [assert.deepStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message)
* [assert.doesNotMatch(string, regexp\[, message\])](https://nodejs.org/api/assert.html#assertdoesnotmatchstring-regexp-message)
* [assert.doesNotReject(asyncFn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertdoesnotrejectasyncfn-error-message)
* [assert.doesNotThrow(fn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertdoesnotthrowfn-error-message)
* [assert.equal(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertequalactual-expected-message)
* [assert.fail(\[message\])](https://nodejs.org/api/assert.html#assertfailmessage)
* [assert.ifError(value)](https://nodejs.org/api/assert.html#assertiferrorvalue)
* [assert.match(string, regexp\[, message\])](https://nodejs.org/api/assert.html#assertmatchstring-regexp-message)
* [assert.notDeepEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotdeepequalactual-expected-message)
* [assert.notDeepStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotdeepstrictequalactual-expected-message)
* [assert.notEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotequalactual-expected-message)
* [assert.notStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertnotstrictequalactual-expected-message)
* [assert.ok(value\[, message\])](https://nodejs.org/api/assert.html#assertokvalue-message)
* [assert.rejects(asyncFn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertrejectsasyncfn-error-message)
* [assert.strictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertstrictequalactual-expected-message)
* [assert.throws(fn\[, error\]\[, message\])](https://nodejs.org/api/assert.html#assertthrowsfn-error-message)
* [assert.partialDeepStrictEqual(actual, expected\[, message\])](https://nodejs.org/api/assert.html#assertpartialdeepstrictequalactual-expected-message)

<br>

## Contributing
If you would also like to contribute to the library, you are welcome to do so. 
You can find information about this in [CONTRIBUTING.md](CONTRIBUTING.md).
You will be also mentioned in the [AUTHORS.md](AUTHORS.md).
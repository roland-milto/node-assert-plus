[Zu Deutsch wechseln](README.de.md)

# `@argument-assertions/node-assert-plus`

## What is `node-assert-plus`?

[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) is a 
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

function checkAccountDetails(options, callback) {
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

---

## What is also new?

### Thirty-six new assertions
| Type check             | Optional checks                | Check items in an isArray     | Check items in an isArray (optional)  |
|------------------------|--------------------------------|-------------------------------|---------------------------------------|
| assert.bigInt          | assert.optionalBigInt          | assert.arrayOfBigInt          | assert.optionalArrayOfBigInt          |
| assert.integer         | assert.optionalInteger         | assert.arrayOfInteger         | assert.optionalArrayOfInteger         |
| assert.null            | assert.optionalNull            | assert.arrayOfNull            | assert.optionalArrayOfNull            |
| assert.nullOrUndefined | assert.optionalNullOrUndefined | assert.arrayOfNullOrUndefined | assert.optionalArrayOfNullOrUndefined |
| assert.plainObject     | assert.optionalPlainObject     | assert.arrayOfPlainObject     | assert.optionalArrayOfPlainObject     |
| assert.promise         | assert.optionalPromise         | assert.arrayOfPromise         | assert.optionalArrayOfPromise         |
| assert.symbol          | assert.optionalSymbol          | assert.arrayOfSymbol          | assert.optionalArrayOfSymbol          |
| assert.undefined       | assert.optionalUndefined       | assert.arrayOfUndefined       | assert.optionalArrayOfUndefined       |
| assert.ValidDate       | assert.optionalValidDate       | assert.arrayOfValidDate       | assert.optionalArrayOfValidDate       |


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

---

## How to use `@argument-assertions/node-assert-plus`?

### Installation via command line

```bash
npm install @argument-assertions/node-assert-plus
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
If the assertion fails, an `AssertionError` is thrown with a message in the following form:

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
the code editor(e.g., WebStorm, Visual Studio Code, etc.).

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

---

## Methods

### Simple assertions
- assert.array(argument, message)
- assert.bigint(argument, message)
- assert.boolean(argument, message) *or* assert.bool(argument, message)
- assert.buffer(argument, message)
- assert.date(argument, message)
- assert.finite(argument, message)
- assert.function(argument, message) *or* assert.func(argument, message)
- assert.integer(argument, message)
- assert.null(argument, message)
- assert.nullOrUndefined(argument, message)
- assert.number(argument, message)
- assert.object(argument, message)
- assert.plainObject(argument, message)
- assert.promise(argument, message)
- assert.regexp(argument, message) *or* assert.regEx(argument, message)
- assert.stream(argument, message)
- assert.string(argument, message)
- assert.symbol(argument, message)
- assert.undefined(argument, message)
- assert.uuid(argument, message)
- assert.validDate(argument, message)

### Array assertions
- assert.arrayOfArray(argument, message)
- assert.arrayOfBigInt(argument, message)
- assert.arrayOfBoolean(argument, message) *or* assert.arrayOfBool(argument, message)
- assert.arrayOfBuffer(argument, message)
- assert.arrayOfDate(argument, message)
- assert.arrayOfFinite(argument, message)
- assert.arrayOfFunction(argument, message) *or* assert.arrayOfFunc(argument, message)
- assert.arrayOfInteger(argument, message)
- assert.arrayOfNull(argument, message)
- assert.arrayOfNullOrUndefined(argument, message)
- assert.arrayOfNumber(argument, message)
- assert.arrayOfObject(argument, message)
- assert.arrayOfPlainObject(argument, message)
- assert.arrayOfPromise(argument, message)
- assert.arrayOfRegexp(argument, message) *or* assert.arrayOfRegEx(argument, message)
- assert.arrayOfStream(argument, message)
- assert.arrayOfString(argument, message)
- assert.arrayOfSymbol(argument, message)
- assert.arrayOfUuid(argument, message)
- assert.arrayOfUndefined(argument, message)
- assert.arrayOfValidDate(argument, message)

### Simple assertions (optional)
- assert.optionalArray(argument, message)
- assert.optionalBigInt(argument, message)
- assert.optionalBoolean(argument, message) *or* assert.optionalBool(argument, message)
- assert.optionalBuffer(argument, message)
- assert.optionalDate(argument, message)
- assert.optionalFinite(argument, message)
- assert.optionalFunction(argument, message) *or* assert.optionalFunc(argument, message)
- assert.optionalInteger(argument, message)
- assert.optionalNull(argument, message)
- assert.optionalNullOrUndefined(argument, message)
- assert.optionalNumber(argument, message)
- assert.optionalObject(argument, message)
- assert.optionalPlainObject(argument, message)
- assert.optionalPromise(argument, message)
- assert.optionalRegEx(argument, message) *or* assert.optionalArrayOfRegexp(argument, message)
- assert.optionalStream(argument, message)
- assert.optionalString(argument, message)
- assert.optionalSymbol(argument, message)
- assert.optionalUndefined(argument, message)
- assert.optionalUuid(argument, message)
- assert.optionalValidDate(argument, message)

### Array assertions (optional)
- assert.optionalArrayOfArray(argument, message)
- assert.optionalArrayOfBigInt(argument, message)
- assert.optionalArrayOfBoolean(argument, message) *or* assert.optionalArrayOfBool(argument, message)
- assert.optionalArrayOfBuffer(argument, message)
- assert.optionalArrayOfDate(argument, message)
- assert.optionalArrayOfFinite(argument, message)
- assert.optionalArrayOfFunction(argument, message) *or* assert.optionalArrayOfFunc(argument, message)
- assert.optionalArrayOfInteger(argument, message)
- assert.optionalArrayOfNull(argument, message)
- assert.optionalArrayOfNullOrUndefined(argument, message)
- assert.optionalArrayOfNumber(argument, message)
- assert.optionalArrayOfObject(argument, message)
- assert.optionalArrayOfPlainObject(argument, message)
- assert.optionalArrayOfPromise(argument, message)
- assert.optionalArrayOfRegEx(argument, message) *or* assert.optionalArrayOfRegexp(argument, message)
- assert.optionalArrayOfStream(argument, message)
- assert.optionalArrayOfString(argument, message)
- assert.optionalArrayOfSymbol(argument, message)
- assert.optionalArrayOfUuid(argument, message)
- assert.optionalArrayOfUndefined(argument, message)
- assert.optionalArrayOfValidDate(argument, message)


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

---

## Contributing
If you would also like to contribute to the library, you are welcome to do so. 
You can find information about this in [CONTRIBUTING.md](CONTRIBUTING.md).
You will be also mentioned in the [AUTHORS.md](AUTHORS.md).
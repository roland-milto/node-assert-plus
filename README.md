# `@argument-assertions/node-assert-plus`

## What is `node-assert-plus`?

[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) is a 
modern and secure **assertion library** written in TypeScript by [Roland Milto](https://roland.milto.de/), designed as 
an enhanced implementation of Node’s built-in [`node:assert/strict`](https://nodejs.org/api/assert.html).

It is a fork of the original [`assert-plus`](https://www.npmjs.com/package/assert-plus) library, which is no longer 
maintained and has several security and performance issues. This new library is up to **ten times faster** than the 
original `assert-plus`, while **reducing** CPU and memory usage by **50–80%**.

Type guarding and strict primitive checks have been added, and problematic features such as `caller` have been removed 
to ensure compatibility with **Strict Mode**.

More details:
- [SAFETY.md](SAFETY.md)
- [PERFORMANCE.md](PERFORMANCE.md)

[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) simplifies 
testing by offering a broad set of ready-to-use assertions. As a simple example:

```js
import {assert} from '@argument-assertions/node-assert-plus';

process.env.NODE_ENV = 'development';

function checkAccountDetails(options, callback) {
	assert.isPlainObject(options, 'options');
	assert.isInteger(options.id, 'options.id');
	assert.isString(options.name, 'options.name');
	assert.arrayOfString(options.email, 'options.email');
	assert.isObject(options.dateObject, 'options.dateObject');
	assert.isBoolean(options.isManager, 'options.isManager');
	assert.isNumber(options.process, 'options.process');
	assert.isFunction(callback, 'callback');

	// Do whatever you want with the account details!
	callback(null, {});
}
```

---

## What is also new?

### Twenty-four new assertions
| Type check | Optional checks            | Check items in an isArray   | Check items in an isArray (optional) |
|------------|----------------------------|---------------------------|------------------------------------|
| assert.isBigint | assert.optionalBigInt      | assert.arrayOfBigInt      | assert.optionalArrayOfBigInt       |
| assert.integer | assert.optionalInteger     | assert.arrayOfInteger     | assert.optionalArrayOfInteger      |
| assert.null | assert.optionalNull        | assert.arrayOfNull        | assert.optionalArrayOfNull         |
| assert.plainObject | assert.optionalPlainObject | assert.arrayOfPlainObject | assert.optionalArrayOfPlainObject  |
| assert.symbol | assert.optionalSymbol      | assert.arrayOfSymbol      | assert.optionalArrayOfSymbol       |
| assert.undefined | assert.optionalUndefined   | assert.arrayOfUndefined   | assert.optionalArrayOfUndefined    |


### Aliases for `bool` and `func`
- `assert.bool` for `assert.boolean`
- `assert.func` for `assert.function`
- `assert.arrayOfBool` for `assert.arrayOfBoolean`
- `assert.arrayOfFunction` for `assert.arrayOfFunction`
- `assert.optionalBool` for `assert.optionalBoolean`
- `assert.optionalFunc` for `assert.optionalFunction`
- `assert.optionalArrayOfBool` for `assert.optionalArrayOfBoolean`
- `assert.optionalArrayOfFunc` for `assert.optionalArrayOfFunction`

---

## Legacy Projects

For legacy codebases that still rely on [`assert-plus`](https://www.npmjs.com/package/assert-plus),  
[`@argument-assertions/node-assert-plus`](https://www.npmjs.com/package/@argument-assertions/node-assert-plus) can be 
used as a compatible drop-in replacement.

For new projects that require a stable assertion library with an extended feature set,  
consider using [`@argument-assertions/assert`](https://www.npmjs.com/package/@argument-assertions/assert).

It offers a modern and secure design, a broader range of functionality, a minimal bundle size, is straightforward to use and is well-documented.

---

## How to use `@argument-assertions/assert-plus`?

### Installation via command line
```bash
npm install @argument-assertions/node-assert-plus`
```

### Import
Use `@argument-assertions/node-assert-plus` as local import, so you need to import it *every time* you want to use it:
```js
import { assert } from '@argument-assertions/node-assert-plus';
```

Use `@argument-assertions/node-assert-plus` as global import, so you need to include it *only once* in your project:
```js
import '@argument-assertions/node-assert-plus/register';
```

### Usage
All methods that *are not* part of Node’s core `assert` API are assumed to take the **value** to validate followed by a 
string **label**, e.g. `assert.FUNCTIONNAME(value, label)`.
This label is not interpreted as a message.
If the assertion fails, an `AssertionError` is thrown with a message in the following form:

```js
process.env.NODE_ENV = 'development';             // Can be *any* string to enable strict mode

assert.integer(42, "my integer success label");   // Success
assert.string("foo", "my string success label");  // Success

assert.integer(42.4, "my integer failure label"); // Failure, maybe you should use assert.number instead? ;)
assert.string(54545, "my string failure label");  // Failure

let strings = ['Roland', 'Milto', 'from', 'Germany'];
assert.arrayOfString(strings, 'good strings');    // Success

strings.push(42);
assert.arrayOfString(strings, 'bad strings');     // Failure

process.env.NODE_ENV = 'production'               // Set to 'production' to disable strict mode

assert.plainObject(new Date(), "date");           // Will be ignored in production mode
```

The best way is to control the development mode via the environment variables of the code editor (e.g., WebStorm, Visual Studio Code, etc.).

Further examples can be viewed and checked in the [test folder](https://github.com/roland-milto/node-assert-plus/tree/master/tests).


### How it looks like
```js
let meaningOfLife = 42.4;
assert.integer(meaningOfLife, "meaningOfLife");
```
Will fail and output:


---

## Methods
- assert.arrayItemTypeCheck(argument, message)
- assert.isBigint(argument, message)
- assert.bool(argument, message)
- assert.buffer(argument, message)
- assert.date(argument, message)
- assert.finite(argument, message)
- assert.func(argument, message)
- assert.integer(argument, message)
- assert.null(argument, message)
- assert.number(argument, message)
- assert.object(argument, message)
- assert.plainObject(argument, message)
- assert.regexp(argument, message)
- assert.string(argument, message)
- assert.symbol(argument, message)
- assert.stream(argument, message)
- assert.undefined(argument, message)
- assert.uuid(argument, message)
- assert.arrayOfArray(argument, message)
- assert.arrayOfBigInt(argument, message)
- assert.arrayOfBool(argument, message)
- assert.arrayOfBuffer(argument, message)
- assert.arrayOfDate(argument, message)
- assert.arrayOfFunc(argument, message)
- assert.arrayOfFinite(argument, message)
- assert.arrayOfInteger(argument, message)
- assert.arrayOfNull(argument, message)
- assert.arrayOfNumber(argument, message)
- assert.arrayOfObject(argument, message)
- assert.arrayOfPlainObject(argument, message)
- assert.arrayOfRegexp(argument, message)
- assert.arrayOfStream(argument, message)
- assert.arrayOfString(argument, message)
- assert.arrayOfSymbol(argument, message)
- assert.arrayOfUuid(argument, message)
- assert.arrayOfUndefined(argument, message)
- assert.optionalArrayItemTypeCheck(argument, message)
- assert.optionalArrayOfArray(argument, message)
- assert.optionalArrayOfBigInt(argument, message)
- assert.optionalArrayOfBool(argument, message)
- assert.optionalArrayOfBuffer(argument, message)
- assert.optionalArrayOfDate(argument, message)
- assert.optionalArrayOfFunc(argument, message)
- assert.optionalArrayOfFinite(argument, message)
- ssert.optionalArrayOfInteger(argument, message)
- assert.optionalArrayOfNull(argument, message)
- assert.optionalArrayOfNumber(argument, message)
- assert.optionalArrayOfObject(argument, message)
- assert.optionalArrayOfPlainObject(argument, message)
- assert.optionalArrayOfRegexp(argument, message)
- assert.optionalArrayOfStream(argument, message)
- assert.optionalArrayOfString(argument, message)
- assert.optionalArrayOfSymbol(argument, message)
- assert.optionalArrayOfUuid(argument, message)
- assert.optionalArrayOfUndefined(argument, message)
- assert.optionalBigInt(argument, message)
- assert.optionalBool(argument, message)
- assert.optionalBuffer(argument, message)
- assert.optionalDate(argument, message)
- assert.optionalFinite(argument, message)
- assert.optionalFunc(argument, message)
- assert.optionalInteger(argument, message)
- assert.optionalNull(argument, message)
- assert.optionalNumber(argument, message)
- assert.optionalObject(argument, message)
- assert.optionalPlainObject(argument, message)
- assert.optionalRegexp(argument, message)
- assert.optionalString(argument, message)
- assert.optionalSymbol(argument, message)
- assert.optionalStream(argument, message)
- assert.optionalUndefined(argument, message)
- assert.optionalUuid(argument, message)

### Strict Node.js assertions
In addition to its own checks, all methods provided by `node:assert/strict` are available, e.g.:
* [assert.deepEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertdeepequalactual-expected-message)
* [assert.deepStrictEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message)
* [assert.doesNotMatch(string, regexp[, message])](https://nodejs.org/api/assert.html#assertdoesnotmatchstring-regexp-message)
* [assert.doesNotReject(asyncFn[, error][, message])](https://nodejs.org/api/assert.html#assertdoesnotrejectasyncfn-error-message)
* [assert.doesNotThrow(fn[, error][, message])](https://nodejs.org/api/assert.html#assertdoesnotthrowfn-error-message)
* [assert.equal(actual, expected[, message])](https://nodejs.org/api/assert.html#assertequalactual-expected-message)
* [assert.fail([message])](https://nodejs.org/api/assert.html#assertfailmessage)
* [assert.ifError(value)](https://nodejs.org/api/assert.html#assertiferrorvalue)
* [assert.match(string, regexp[, message])](https://nodejs.org/api/assert.html#assertmatchstring-regexp-message)
* [assert.notDeepEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertnotdeepequalactual-expected-message)
* [assert.notDeepStrictEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertnotdeepstrictequalactual-expected-message)
* [assert.notEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertnotequalactual-expected-message)
* [assert.notStrictEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertnotstrictequalactual-expected-message)
* [assert.ok(value[, message])](https://nodejs.org/api/assert.html#assertokvalue-message)
* [assert.rejects(asyncFn[, error][, message])](https://nodejs.org/api/assert.html#assertrejectsasyncfn-error-message)
* [assert.strictEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertstrictequalactual-expected-message)
* [assert.throws(fn[, error][, message])](https://nodejs.org/api/assert.html#assertthrowsfn-error-message)
* [assert.partialDeepStrictEqual(actual, expected[, message])](https://nodejs.org/api/assert.html#assertpartialdeepstrictequalactual-expected-message)

---

## Contributing
If you would also like to contribute to the library, you are welcome to do so. You can find information about this in 
[CONTRIBUTING.md](CONTRIBUTING.md). You will be also mentioned in the [AUTHORS.md](AUTHORS.md).
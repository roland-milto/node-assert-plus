import { assert } from '../dist/index.js';

process.env["NODE_ENV"] = 'development';             // Can be *any* string to enable strict mode

/*
assert.integer(42.4, "my integer failure label"); // Failure, maybe you should use assert.number instead? ;)
assert.string(54545, "my string failure label");  // Failure


let meaningOfLife = 42.4;
assert.integer(meaningOfLife, "meaningOfLife label");

*/

let strings = ['Roland', 'Milto', 'from', 'Germany'];
assert.arrayOfString(strings, 'good strings');    // Success

strings.push(42);
assert.arrayOfString(strings, 'bad strings in isArray');     // Failure
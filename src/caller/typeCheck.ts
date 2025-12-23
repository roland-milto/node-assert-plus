// Import: Build-ins.
import {booleanChecks} from './booleanChecks.js';

/**
 * Short performant checks for common types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-19
 */
export const typeCheck =
{
  array: (arg: any): arg is any[] =>
    Array.isArray(arg),

  bigInt: (arg: any): arg is bigint =>
    typeof arg === 'bigint',

  // Alias for "boolean".
  bool: (arg: any): arg is boolean =>
    typeCheck.boolean(arg),

  boolean: (arg: any): arg is boolean =>
    typeof arg === 'boolean',

  buffer: (arg: any): arg is Buffer =>
    Buffer.isBuffer(arg),

  date: (arg: any): arg is Date =>
    arg instanceof Date,

  finite: (arg: any): arg is number =>
    Number.isFinite(arg),

  // Alias for "function".
  func: (arg: any): arg is (...args: any[]) => any =>
    typeCheck.function(arg),

  function: (arg: any): arg is (...args: any[]) => any =>
    typeof arg === 'function',

  integer: (arg: any): arg is number =>
    typeof arg === 'number' && Number.isInteger(arg),

  null: (arg: any): arg is null =>
    arg === null,

  number: (arg: any): arg is number =>
    typeof arg === 'number' && !Number.isNaN(arg) && Number.isFinite(arg),

  // All objects.
  object: (arg: any): arg is object =>
    typeof arg === 'object' && arg !== null,

  plainObject: (arg: any): arg is Record<string, unknown> =>
    Object.prototype.toString.call(arg) === '[object Object]',

  isRegex: (arg: any): arg is RegExp =>
    arg instanceof RegExp,

  // Node.js streams.
  stream: (arg: any): arg is Stream =>
    arg != null &&
    typeof arg === 'object' &&
    typeof arg.pipe === 'function' &&
    typeof arg.on === 'function',

  string: (arg: any): arg is string =>
    typeof arg === 'string',

  symbol: (arg: any): arg is symbol =>
    typeof arg === 'symbol',

  undefined: (arg: any): arg is undefined =>
    typeof arg === 'undefined',

  // Unique universal identifier.
  uuid: (arg: any): arg is string =>
    typeof arg === 'string' && UUID_REGEXP.test(arg),
};
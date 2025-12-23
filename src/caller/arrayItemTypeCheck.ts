// Import: Interfaces and types.
import type {Stream} from "node:stream";
import type {ArrayItemTypeCheck} from "./interface.js";

// Import: Third-party modules.
import {type} from '@type-check/strict'; 

// Import: Self-created functions.
import {toss} from "../utils/toss.js";
import {isUuid} from "../utils/isUuid.js";
import {getClass} from "../utils/getClass.js";
import {isDebugMode} from "../utils/isDebugMode.js";

/**
 * Short performant checks for common types in arrays.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export const arrayItemTypeCheck: ArrayItemTypeCheck =
{
  // Check an array of arrays.
  arrayOfArray: (argument: unknown, label: string): asserts argument is unknown[][] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-arrays', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isArray(item)) {
        toss(label, 'array-in-array', item, 'Array.isArray');
      }
    }
  },

  // Check an array of BigInts.
  arrayOfBigInt: (argument: unknown, label: string): asserts argument is bigint[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-bigint', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isBigInt(item)) {
        toss(label, 'bigint-in-array', item);
      }
    }
  },

  // Alias for "arrayOfBoolean".
  arrayOfBool: (argument: unknown, label: string): asserts argument is boolean[] =>
    arrayItemTypeCheck.arrayOfBoolean(argument, label),

  // Check an array of booleans.
  arrayOfBoolean: (argument: unknown, label: string): asserts argument is boolean[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-boolean', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isBoolean(item)) {
        toss(label, 'boolean-in-array', item);
      }
    }
  },

  // Check an array of buffers.
  arrayOfBuffer: (argument: unknown, label: string): asserts argument is Buffer[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-buffer', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isBuffer(item)) {
        toss(label, 'buffer-in-array', item, 'Buffer.isBuffer');
      }
    }
  },

  // Check an array of dates.
  arrayOfDate: (argument: unknown, label: string): asserts argument is Date[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-date', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isDate(item)) {
        toss(label, 'date-in-array', item, 'instanceof', getClass);
      }
    }
  },

  // Check an array of finite numbers.
  arrayOfFinite: (argument: unknown, label: string): asserts argument is number[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-finite', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isFinite(item)) {
        toss(label, 'finite-in-array', item);
      }
    }
  },

  // Alias of "arrayOfFunction".
  arrayOfFunc: (argument: unknown, label: string): asserts argument is Function[] =>
    arrayItemTypeCheck.arrayOfFunction(argument, label),

  // Check an array of functions.
  arrayOfFunction: (argument: unknown, label: string): asserts argument is Function[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-function', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isFunction(item)) {
        toss(label, 'function-in-array', item);
      }
    }
  },

  // Check an array of integers.
  arrayOfInteger: (argument: unknown, label: string): asserts argument is number[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-integer', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isInteger(item)) {
        toss(label, 'integer-in-array', item);
      }
    }
  },

  // Check an array of nulls.
  arrayOfNull: (argument: unknown, label: string): asserts argument is null[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-null', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isNull(item)) {
        toss(label, 'null-in-array', item);
      }
    }
  },

  // Check an array of nulls or undefined.
  arrayOfNullOrUndefined: (argument: unknown, label: string): asserts argument is (null | undefined)[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-null', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isNullOrUndefined(item)) {
        toss(label, 'null-in-array', item);
      }
    }
  },

  // Check an array of numbers.
  arrayOfNumber: (argument: unknown, label: string): asserts argument is number[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-number', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isNumber(item)) {
        toss(label, 'number-in-array', item, 'isNumber');
      }
    }
  },

  // Check an array of objects.
  arrayOfObject: (argument: unknown, label: string): asserts argument is object[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-object', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isObject(item)) {
        toss(label, 'object-in-array', item, 'isObject');
      }
    }
  },

  // Check an array of plain objects.
  arrayOfPlainObject: (argument: unknown, label: string): asserts argument is Record<string, unknown>[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-plain-object', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isPlainObject(item)) {
        toss(label, 'plain-object-in-array', item, 'isPlainObject');
      }
    }
  },

  // Check an array of promises.
  arrayOfPromise: (argument: unknown, label: string): asserts argument is Promise<unknown> =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-promise', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isPromise(item)) {
        toss(label, 'promise-in-array', item, 'isPromise');
      }
    }
  },

  // Check an array of regular expressions.
  arrayOfRegEx: (argument: unknown, label: string): asserts argument is RegExp[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-regexp', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isRegEx(item)) {
        toss(label, 'regexp-in-array', item, 'instanceof', getClass);
      }
    }
  },

  // Alias for "arrayOfRegexp".
  arrayOfRegexp: (argument: unknown, label: string): asserts argument is RegExp[] =>
    arrayItemTypeCheck.arrayOfRegEx(argument, label),

  // Check an array of streams.
  arrayOfStream: (argument: unknown, label: string): asserts argument is Stream[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-stream', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isStream(item)) {
        toss(label, 'stream-in-array', item, 'isStream');
      }
    }
  },

  // Check an array of strings.
  arrayOfString: (argument: unknown, label: string): asserts argument is string[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-string', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isString(item)) {
        toss(label, 'string-in-array', item);
      }
    }
  },

  // Check an array of symbols
  arrayOfSymbol: (argument: unknown, label: string): asserts argument is symbol[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-symbol', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isSymbol(item)) {
        toss(label, 'symbol-in-array', item);
      }
    }
  },

  // Check an array of undefined values.
  arrayOfUndefined: (argument: unknown, label: string): asserts argument is undefined[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-undefined', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isUndefined(item)) {
        toss(label, 'undefined-in-array', item);
      }
    }
  },

  // Check an array of unique universal identifier.
  arrayOfUuid: (argument: unknown, label: string): asserts argument is string[] | undefined | null =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-uuids', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!isUuid(item)) {
        toss(label, 'uuid-in-array', item, 'isUuid');
      }
    }
  },

  // Check an array of dates whether they are valid.
  arrayOfValidDate: (argument: unknown, label: string): asserts argument is Date[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!type.isArray(argument)) {
      toss(label, 'array-with-valid-dates', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!type.isValidDate(item)) {
        toss(label, 'valid-date-in-array', item, 'isValidDate');
      }
    }
  }
}
// Import: Build-ins.
import {Stream} from 'stream';

// Import: Self-created functions.
import {toss} from "../utils/toss.js";
import {booleanCheck} from "./booleanCheck.js";
import {getClass} from "../utils/getClass.js";
import {isDebugMode} from "../utils/isDebugMode.js";

/**
 * Short performant checks for common types in arrays.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-19
 */
export const arrayItemTypeCheck =
{
  arrayOfArray: (argument: any, label: string): asserts argument is any[][] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-arrays', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isArray(item)) {
        toss(label, 'array-in-array', item, 'Array.isArray');
      }
    }
  },

  arrayOfBigInt: (argument: any, label: string): asserts argument is bigint[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-bigint', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isBigInt(item)) {
        toss(label, 'bigint-in-array', item);
      }
    }
  },

  // Alias for "arrayOfBoolean".
  arrayOfBool: (argument: any, label: string): asserts argument is boolean[] =>
    arrayItemTypeCheck.arrayOfBoolean(argument, label),

  arrayOfBoolean: (argument: any, label: string): asserts argument is boolean[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-boolean', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isBoolean(item)) {
        toss(label, 'boolean', item);
      }
    }
  },

  arrayOfBuffer: (argument: any, label: string): asserts argument is Buffer[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) toss(label, 'array-with-buffer', argument, 'Array.isArray');

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isBuffer(item)) {
        toss(label, 'buffer', item, 'Buffer.isBuffer');
      }
    }
  },

  arrayOfDate: (argument: any, label: string): asserts argument is Date[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-date', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isDate(item)) {
        toss(label, 'date', item, 'instanceof', getClass);
      }
    }
  },

  arrayOfFinite: (argument: any, label: string): asserts argument is number[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-finite', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isFinite(item)) {
        toss(label, 'finite', item);
      }
    }
  },

  // Alias of "arrayOfFunction".
  arrayOfFunc: (argument: any, label: string): asserts argument is Function[] =>
    arrayItemTypeCheck.arrayOfFunction(argument, label),

  arrayOfFunction: (argument: any, label: string): asserts argument is Function[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-function', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isFunction(item)) {
        toss(label, 'function-in-array', item);
      }
    }
  },

  arrayOfInteger: (argument: any, label: string): asserts argument is number[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-integer', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isInteger(item)) {
        toss(label, 'integer-in-array', item);
      }
    }
  },

  arrayOfNull: (argument: any, label: string): asserts argument is null[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-null', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isNull(item)) {
        toss(label, 'null-in-array', item);
      }
    }
  },

  arrayOfNumber: (argument: any, label: string): asserts argument is number[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-number', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isNumber(item)) {
        toss(label, 'number-in-array', item);
      }
    }
  },

  arrayOfObject: (argument: any, label: string): asserts argument is object[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-object', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isObject(item)) {
        toss(label, 'object-in-array', item);
      }
    }
  },

  arrayOfPlainObject: (argument: any, label: string): asserts argument is Record<string, unknown>[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-plain-object', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isPlainObject(item)) {
        toss(label, 'plain-object-in-array', item, 'Object.prototype.toString');
      }
    }
  },

  arrayOfRegexp: (argument: any, label: string): asserts argument is RegExp[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) toss(label, 'array-with-regexp', argument, 'Array.isArray');

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isRegex(item)) {
        toss(label, 'regexp-in-array', item, 'instanceof', getClass);
      }
    }
  },

  arrayOfStream: (argument: any, label: string): asserts argument is Stream[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) toss(label, 'array-with-stream', argument, 'Array.isArray');

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isStream(item)) {
        toss(label, 'stream-in-array', item, 'isStream');
      }
    }
  },

  arrayOfString: (argument: any, label: string): asserts argument is string[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-string', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isString(item)) {
        toss(label, 'string-in-array', item);
      }
    }
  },

  arrayOfSymbol: (argument: any, label: string): asserts argument is symbol[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-symbol', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isSymbol(item)) {
        toss(label, 'symbol-in-array', item);
      }
    }
  },

  arrayOfUndefined: (argument: any, label: string): asserts argument is undefined[] => 
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-undefined', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isUndefined(item)) {
        toss(label, 'undefined-in-array', item);
      }
    }
  },

  // Unique universal identifier.
  arrayOfUuid: (argument: any, label: string): asserts argument is string[] =>
  {
    if (!isDebugMode) {
      return;
    }

    // Check if it is an array.
    if (!booleanCheck.isArray(argument)) {
      toss(label, 'array-with-uuids', argument, 'Array.isArray');
    }

    // Check every item in the array.
    for (const item of argument) {
      if (!booleanCheck.isUuid(item)) {
        toss(label, 'uuid-in-array', item, 'isUuid');
      }
    }
  },
}
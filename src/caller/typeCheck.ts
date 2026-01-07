// Import: Build-ins.
import type {Stream} from 'node:stream';
import type {TypeCheck} from "./interface.js";

// Import: Third-party modules
import {type} from "@type-check/guards";

// Import: Self-created functions.
import {toss} from "../utils/toss.js";
import {isUuid} from "../utils/isUuid.js";
import {getClass} from "../utils/getClass.js";
import {isDebugMode} from "../utils/isDebugMode.js";

/**
 * Short performant checks for common types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export const typeCheck: TypeCheck =
  {
    // Checks for an array.
    array: (argument: unknown, label: string): asserts argument is unknown[] => {
      if (!isDebugMode) {
        return;
      }

      if (!type.isArray(argument)) {
        toss(label, 'array', argument, 'Array.isArray');
      }
    },

  // Checks for a big integer.
  bigInt: (argument: unknown, label: string): asserts argument is bigint =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isBigInt(argument)) {
      toss(label, 'bigint', argument);
    }
  },


  // Alias for "boolean".
  bool: (argument: unknown, label: string): asserts argument is boolean =>
    typeCheck.boolean(argument, label),

  // Checks for boolean.
  boolean: (argument: unknown, label: string): asserts argument is boolean =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isBoolean(argument)) {
      toss(label, 'boolean', argument);
    }
  },

  // Checks for a buffer.
  buffer: (argument: unknown, label: string): asserts argument is Buffer =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isBuffer(argument)) {
      toss(label, 'buffer', argument, 'Buffer.isBuffer');
    }
  },

  // Checks for a date.
  date: (argument: unknown, label: string): asserts argument is Date =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isDate(argument)) {
      toss(label, 'date', argument, 'instanceof', getClass);
    }
  },

  // Checks for a finite number.
  finite: (argument: unknown, label: string): asserts argument is number =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isFinite(argument)) {
      toss(label, 'finite', argument);
    }
  },

  // Alias for "function".
  func: (argument: unknown, label: string): asserts argument is Function =>
    typeCheck.function(argument, label),

  // Checks for a function.
  function: (argument: unknown, label: string): asserts argument is Function =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isFunction(argument)) {
      toss(label, 'function', argument);
    }
  },

  // Checks for an integer.
  integer: (argument: unknown, label: string): asserts argument is number =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isInteger(argument)) {
      toss(label, 'integer', argument);
    }
  },

  // Checks for null.
  null: (argument: unknown, label: string): asserts argument is null =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isNull(argument)) {
      toss(label, 'null', argument);
    }
  },

  // Checks for null or undefined.
  nullOrUndefined: (argument: unknown, label: string): asserts argument is null | undefined =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isNullOrUndefined(argument)) {
      toss(label, 'null or undefined', argument);
    }
  },

  // Checks for a number.
  number: (argument: unknown, label: string): asserts argument is number =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isNumber(argument)) {
      toss(label, 'number', argument);
    }
  },

  // Checks for objects.
  object: (argument: unknown, label: string): asserts argument is object =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isObject(argument)) {
      toss(label, 'object', argument);
    }
  },

  // Checks for plain objects.
  plainObject: (argument: unknown, label: string): asserts argument is Record<string, unknown> =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isPlainObject(argument)) {
      toss(label, 'plain object', argument);
    }
  },

  // Checks for promises.
  promise: (argument: unknown, label: string): asserts argument is Promise<unknown> =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isPromise(argument)) {
      toss(label, 'promise', argument, 'isPromise');
    }
  },

  // Checks for regular expressions.
  regEx: (argument: unknown, label: string): asserts argument is RegExp =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isRegEx(argument)) {
      toss(label, 'regexp', argument, 'instanceof', getClass);
    }
  },

  // Checks for regular expressions.
  regexp: (argument: unknown, label: string): asserts argument is RegExp =>
    typeCheck.regEx(argument, label),

  // Checks for Node.js streams.
  stream: (argument: unknown, label: string): asserts argument is Stream =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isStream(argument)) {
      toss(label, 'stream', argument, 'instanceof', getClass);
    }
  },

  // Checks for strings.
  string: (argument: unknown, label: string): asserts argument is string =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isString(argument)) {
      toss(label, 'string', argument);
    }
  },

  // Checks for symbol.
  symbol: (argument: unknown, label: string): asserts argument is symbol =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isSymbol(argument)) {
      toss(label, 'symbol', argument);
    }
  },

  // Checks for undefined.
  undefined: (argument: unknown, label: string): asserts argument is undefined =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isUndefined(argument)) {
      toss(label, 'undefined', argument);
    }
  },

  // Checks for unique universal identifier (UUID).
  uuid: (argument: unknown, label: string): asserts argument is string =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!isUuid(argument)) {
      toss(label, 'uuid', argument, 'isUUID');
    }
  },

  // Checks for a valid date.
  validDate: (argument: unknown, label: string): asserts argument is Date =>
  {
    if (!isDebugMode) {
      return;
    }

    if (!type.isValidDate(argument)) {
      toss(label, 'valid date', argument, '@type-check/guards/isValidDate');
    }
  }
}
// Import: Build-ins.
import type {Stream} from 'node:stream';

// Import: Self-created functions.
import {typeCheck} from "./typeCheck.js";

/**
 * Short performant optionalTypeCheck checks for common types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export const optionalTypeCheck =
{
  // Checks for an optional array.
  optionalArray: (argument: unknown, label: string): asserts argument is unknown[] | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.array(argument, label);
  },

  // Checks for an optional big integer.
  optionalBigInt: (argument: unknown, label: string): asserts argument is bigint | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.bigInt(argument, label);
  },

  // Alias for "optionalBoolean".
  optionalBool: (argument: unknown, label: string): asserts argument is boolean | undefined | null =>
    optionalTypeCheck.optionalBoolean(argument, label),

  // Checks for an optional boolean.
  optionalBoolean: (argument: unknown, label: string): asserts argument is boolean | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.boolean(argument, label);
  },

  // Checks for an optional buffer.
  optionalBuffer: (argument: unknown, label: string): asserts argument is Buffer | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.buffer(argument, label);
  },

  // Checks for an optional date.
  optionalDate: (argument: unknown, label: string): asserts argument is Date | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.date(argument, label);
  },

  // Checks for an optional finite number.
  optionalFinite: (argument: unknown, label: string): asserts argument is number | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.finite(argument, label);
  },

  // Alias of "optionalFunction".
  optionalFunc: (argument: unknown, label: string): asserts argument is Function | undefined | null =>
    optionalTypeCheck.optionalFunction(argument, label),

  // Checks for an optional function.
  optionalFunction: (argument: unknown, label: string): asserts argument is Function | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.function(argument, label);
  },

  // Checks for an optional integer.
  optionalInteger: (argument: unknown, label: string): asserts argument is number | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.integer(argument, label);
  },

  // Checks for an optional null value.
  optionalNull: (argument: unknown, label: string): asserts argument is null | undefined =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.null(argument, label);
  },

  // Checks for an optional null or undefined value.
  optionalNullOrUndefined: (argument: unknown, label: string): asserts argument is null | undefined =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.nullOrUndefined(argument, label);
  },

  // Checks for an optional number.
  optionalNumber: (argument: unknown, label: string): asserts argument is number | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.number(argument, label);
  },

  // Checks for an optional object.
  optionalObject: (argument: unknown, label: string): asserts argument is object | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.object(argument, label);
  },

  // Checks for an optional plain object.
  optionalPlainObject: (argument: unknown, label: string): asserts argument is object | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.plainObject(argument, label);
  },

  // Checks for an optional promise.
  optionalPromise: (argument: unknown, label: string): asserts argument is Promise<unknown> | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.promise(argument, label);
  },

  // Checks for an optional regular expression.
  optionalRegEx: (argument: unknown, label: string): asserts argument is RegExp | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.regEx(argument, label);
  },

  // Alias for "optionalRegEx".
  optionalRegexp: (argument: unknown, label: string): asserts argument is RegExp | undefined | null =>
    optionalTypeCheck.optionalRegEx(argument, label),

  // Checks for an optional Node.js stream.
  optionalStream: (argument: unknown, label: string): asserts argument is Stream | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.stream(argument, label);
  },

  // Checks for an optional string.
  optionalString: (argument: unknown, label: string): asserts argument is string | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.string(argument, label);
  },

  // Checks for an optional symbol.
  optionalSymbol: (argument: unknown, label: string): asserts argument is symbol | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.symbol(argument, label);
  },

  // Checks for an optional undefined value.
  optionalUndefined: (argument: unknown, label: string): asserts argument is undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.undefined(argument, label);
  },

  // Optional Unique Universal Identifier.
  optionalUuid: (argument: unknown, label: string): asserts argument is string | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.uuid(argument, label);
  },

  // Check if an optional date is valid.
  optionalValidDate: (argument: unknown, label: string): asserts argument is Date | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (argument == null) {
      return;
    }

    typeCheck.validDate(argument, label);
  },
}
// Import: Build-ins.
import type {Stream} from 'node:stream';

// Import: Self-created functions.
import {arrayItemTypeCheck} from "./arrayItemTypeCheck.js";

/**
 * Short performant checks for optionalTypeCheck common types in arrays.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export const optionalArrayItemTypeCheck =
{
  // Optional check for arrays of arrays.
  optionalArrayOfArray: (argument: unknown, label: string): asserts argument is unknown[][] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfArray(argument, label);
  },

  // Optional check for arrays of big integers.
  optionalArrayOfBigInt: (argument: unknown, label: string): asserts argument is bigint[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfBigInt(argument, label);
  },

  // Alias for "optionalArrayOfBoolean".
  optionalArrayOfBool: (argument: unknown, label: string): asserts argument is boolean[] | undefined | null =>
    optionalArrayItemTypeCheck.optionalArrayOfBoolean(argument, label),

  // Optional check for arrays of booleans.
  optionalArrayOfBoolean: (argument: unknown, label: string): asserts argument is boolean[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfBoolean(argument, label);
  },

  // Optional check for arrays of buffers.
  optionalArrayOfBuffer: (argument: unknown, label: string): asserts argument is Buffer[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfBuffer(argument, label);
  },

  // Optional check for arrays of dates.
  optionalArrayOfDate: (argument: unknown, label: string): asserts argument is Date[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfDate(argument, label);
  },

  // Optional check for arrays of finite numbers.
  optionalArrayOfFinite: (argument: unknown, label: string): asserts argument is number[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfFinite(argument, label);
  },

  // Alias of "optionalArrayOfFunction".
  optionalArrayOfFunc: (argument: unknown, label: string): asserts argument is Function[] | undefined | null =>
    optionalArrayItemTypeCheck.optionalArrayOfFunction(argument, label),

  // Optional check for arrays of functions.
  optionalArrayOfFunction: (argument: unknown, label: string): asserts argument is Function[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfFunction(argument, label);
  },

  // Optional check for arrays of integers.
  optionalArrayOfInteger: (argument: unknown, label: string): asserts argument is number[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfInteger(argument, label);
  },

  // Optional check for arrays of null values.
  optionalArrayOfNull: (argument: unknown, label: string): asserts argument is null[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfNull(argument, label);
  },

  // Optional check for arrays of null or undefined values.
  optionalArrayOfNullOrUndefined: (argument: unknown, label: string): asserts argument is (null | undefined)[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfNullOrUndefined(argument, label);
  },

  // Optional check for arrays of numbers.
  optionalArrayOfNumber: (argument: unknown, label: string): asserts argument is number[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfNumber(argument, label);
  },

  // Optional check for arrays of objects.
  optionalArrayOfObject: (argument: unknown, label: string): asserts argument is object[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfObject(argument, label);
  },

  // Optional check for arrays of plain objects.
  optionalArrayOfPlainObject: (argument: unknown, label: string): asserts argument is Record<string, unknown>[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfPlainObject(argument, label);
  },

  // Optional check for arrays of promises.
  optionalArrayOfPromise: (argument: unknown, label: string): asserts argument is Promise<unknown>[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfPromise(argument, label);
  },

  // Optional check for arrays of regular expressions.
  optionalArrayOfRegEx: (argument: unknown, label: string): asserts argument is RegExp[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfRegEx(argument, label);
  },

  // Alias for "optionalArrayOfRegexp".
  optionalArrayOfRegexp: (argument: unknown, label: string): asserts argument is RegExp[] | undefined | null =>
    optionalArrayItemTypeCheck.optionalArrayOfRegEx(argument, label),

  // Optional check for arrays of Node.js streams.
  optionalArrayOfStream: (argument: unknown, label: string): asserts argument is Stream[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfStream(argument, label);
  },

  // Optional check for arrays of strings.
  optionalArrayOfString: (argument: unknown, label: string): asserts argument is string[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfString(argument, label);
  },

  // Optional check for arrays of symbols.
  optionalArrayOfSymbol: (argument: unknown, label: string): asserts argument is symbol[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfSymbol(argument, label);
  },

  // Optional check for arrays of undefined values.
  optionalArrayOfUndefined: (argument: unknown, label: string): asserts argument is undefined[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfUndefined(argument, label);
  },

  // Optional check for arrays of unique universal identifiers.
  optionalArrayOfUuid: (argument: unknown, label: string): asserts argument is string[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfUuid(argument, label);
  },

  // Optional check for arrays of unique universal identifiers.
  optionalArrayOfValidDate: (argument: unknown, label: string): asserts argument is Date[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfValidDate(argument, label);
  },
}
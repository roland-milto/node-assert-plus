// Import: Build-ins.
import {Stream} from 'node:stream';

// Import: Self-created functions.
import {arrayItemTypeCheck} from "./arrayItemTypeCheck.ts";

/**
 * Short performant checks for optionalTypeCheck common types in arrays.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-19
 */
export const optionalArrayItemTypeCheck =
{
  optionalArrayOfArray: (argument: any, label: string): asserts argument is any[][] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfArray(argument as string[], label);
  },

  optionalArrayOfBigInt: (argument: any, label: string): asserts argument is bigint[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfBigInt(argument as string[], label);
  },

  // Alias for "optionalArrayOfBoolean".
  optionalArrayOfBool: (argument: any, label: string): asserts argument is boolean[] | undefined | null =>
    optionalArrayItemTypeCheck.optionalArrayOfBoolean(argument, label),

  optionalArrayOfBoolean: (argument: any, label: string): asserts argument is boolean[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfBoolean(argument as string[], label);
  },

  optionalArrayOfBuffer: (argument: any, label: string): asserts argument is Buffer[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfBuffer(argument as string[], label);
  },

  optionalArrayOfDate: (argument: any, label: string): asserts argument is Date[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfDate(argument as string[], label);
  },

  optionalArrayOfFinite: (argument: any, label: string): asserts argument is number[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfFinite(argument as string[], label);
  },

  // Alias of "optionalArrayOfFunction".
  optionalArrayOfFunc: (argument: any, label: string): asserts argument is Function[] | undefined | null =>
    optionalArrayItemTypeCheck.optionalArrayOfFunction(argument, label),

  optionalArrayOfFunction: (argument: any, label: string): asserts argument is Function[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfFunction(argument as string[], label);
  },

  optionalArrayOfInteger: (argument: any, label: string): asserts argument is number[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfInteger(argument as string[], label);
  },

  optionalArrayOfNull: (argument: any, label: string): asserts argument is null[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfNull(argument as string[], label);
  },

  optionalArrayOfNumber: (argument: any, label: string): asserts argument is number[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfNumber(argument as string[], label);
  },

  optionalArrayOfObject: (argument: any, label: string): asserts argument is object[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfObject(argument as string[], label);
  },

  optionalArrayOfPlainObject: (argument: any, label: string): asserts argument is Record<string, unknown>[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfPlainObject(argument as string[], label);
  },
  optionalArrayOfRegexp: (argument: any, label: string): asserts argument is RegExp[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfRegexp(argument as string[], label);
  },

  optionalArrayOfStream: (argument: any, label: string): asserts argument is Stream[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfStream(argument as string[], label);
  },

  optionalArrayOfString: (argument: any, label: string): asserts argument is string[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfString(argument as string[], label);
  },

  optionalArrayOfSymbol: (argument: any, label: string): asserts argument is symbol[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfSymbol(argument as string[], label);
  },

  optionalArrayOfUndefined: (argument: any, label: string): asserts argument is undefined[] | undefined | null =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfUndefined(argument, label);
  },

  optionalArrayOfUuid: (argument: any, label: string) =>
  {
    // Skip check if the argument is undefined or null.
    if (argument == null) {
      return;
    }

    // Check every item in the array.
    arrayItemTypeCheck.arrayOfUuid(argument, label);
  },
}
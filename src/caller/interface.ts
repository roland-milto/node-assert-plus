// Import: Build-ins.
import type {Stream} from "node:stream";

/**
 * Interface for the type check methods.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export interface TypeCheck {
  array: (argument: unknown, label: string) => asserts argument is unknown[]
  bigInt: (argument: unknown, label: string) => asserts argument is bigint
  bool: (argument: unknown, label: string) => asserts argument is boolean
  boolean: (argument: unknown, label: string) => asserts argument is boolean // Alias for "arrayOfBool".
  buffer: (argument: unknown, label: string) => asserts argument is Buffer
  date: (argument: unknown, label: string) => asserts argument is Date
  finite: (argument: unknown, label: string) => asserts argument is number
  func: (argument: unknown, label: string) => asserts argument is Function
  function: (argument: unknown, label: string) => asserts argument is Function // Alias for "arrayOfFunc".
  integer: (argument: unknown, label: string) => asserts argument is number
  null: (argument: unknown, label: string) => asserts argument is null
  nullOrUndefined: (argument: unknown, label: string) => asserts argument is (null | undefined)
  number: (argument: unknown, label: string) => asserts argument is number
  object: (argument: unknown, label: string) => asserts argument is object
  plainObject: (argument: unknown, label: string) => asserts argument is Record<string, unknown>
  promise: (argument: unknown, label: string) => asserts argument is Promise<unknown>
  regexp: (argument: unknown, label: string) => asserts argument is RegExp
  regEx: (argument: unknown, label: string) => asserts argument is RegExp // Alias for "arrayOfRegexp".
  stream: (argument: unknown, label: string) => asserts argument is Stream
  string: (argument: unknown, label: string) => asserts argument is string
  symbol: (argument: unknown, label: string) => asserts argument is symbol
  undefined: (argument: unknown, label: string) => asserts argument is undefined
  uuid: (argument: unknown, label: string) => asserts argument is string
  validDate: (argument: unknown, label: string) => asserts argument is Date
}

/**
 * Prevents TS2775 errors when these methods are used in `optionalArrayItemTypeCheck`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export interface ArrayItemTypeCheck {
  arrayOfArray: (argument: unknown, label: string) => asserts argument is unknown[][];
  arrayOfBigInt: (argument: unknown, label: string) => asserts argument is bigint[];
  arrayOfBool: (argument: unknown, label: string) => asserts argument is boolean[];
  arrayOfBoolean: (argument: unknown, label: string) => asserts argument is boolean[]; // Alias for "arrayOfBool".
  arrayOfBuffer: (argument: unknown, label: string) => asserts argument is Buffer[];
  arrayOfDate: (argument: unknown, label: string) => asserts argument is Date[];
  arrayOfFinite: (argument: unknown, label: string) => asserts argument is number[];
  arrayOfFunc: (argument: unknown, label: string) => asserts argument is Function[];
  arrayOfFunction: (argument: unknown, label: string) => asserts argument is Function[]; // Alias for "arrayOfFunc".
  arrayOfInteger: (argument: unknown, label: string) => asserts argument is number[];
  arrayOfNull: (argument: unknown, label: string) => asserts argument is null[];
  arrayOfNullOrUndefined: (argument: unknown, label: string) => asserts argument is (null | undefined)[];
  arrayOfNumber: (argument: unknown, label: string) => asserts argument is number[];
  arrayOfObject: (argument: unknown, label: string) => asserts argument is object[];
  arrayOfPlainObject: (argument: unknown, label: string) => asserts argument is Record<string, unknown>[];
  arrayOfPromise: (argument: unknown, label: string) => asserts argument is Promise<unknown>[];
  arrayOfRegexp: (argument: unknown, label: string) => asserts argument is RegExp[];
  arrayOfRegEx: (argument: unknown, label: string) => asserts argument is RegExp[]; // Alias for "arrayOfRegexp".
  arrayOfStream: (argument: unknown, label: string) => asserts argument is Stream[];
  arrayOfString: (argument: unknown, label: string) => asserts argument is string[];
  arrayOfSymbol: (argument: unknown, label: string) => asserts argument is symbol[];
  arrayOfUndefined: (argument: unknown, label: string) => asserts argument is undefined[];
  arrayOfUuid: (argument: unknown, label: string) => asserts argument is string[];
  arrayOfValidDate: (argument: unknown, label: string) => asserts argument is Date[];
}
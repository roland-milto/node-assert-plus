// Import: Build-ins.
import type {Stream} from "node:stream";

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
  arrayOfBoolean: (argument: unknown, label: string) => asserts argument is boolean[];
  arrayOfBuffer: (argument: unknown, label: string) => asserts argument is Buffer[];
  arrayOfDate: (argument: unknown, label: string) => asserts argument is Date[];
  arrayOfFinite: (argument: unknown, label: string) => asserts argument is number[];
  arrayOfFunc: (argument: unknown, label: string) => asserts argument is Function[];
  arrayOfFunction: (argument: unknown, label: string) => asserts argument is Function[];
  arrayOfInteger: (argument: unknown, label: string) => asserts argument is number[];
  arrayOfNull: (argument: unknown, label: string) => asserts argument is null[];
  arrayOfNumber: (argument: unknown, label: string) => asserts argument is number[];
  arrayOfObject: (argument: unknown, label: string) => asserts argument is object[];
  arrayOfPlainObject: (argument: unknown, label: string) => asserts argument is Record<string, unknown>[];
  arrayOfRegexp: (argument: unknown, label: string) => asserts argument is RegExp[];
  arrayOfStream: (argument: unknown, label: string) => asserts argument is Stream[];
  arrayOfString: (argument: unknown, label: string) => asserts argument is string[];
  arrayOfSymbol: (argument: unknown, label: string) => asserts argument is symbol[];
  arrayOfUndefined: (argument: unknown, label: string) => asserts argument is undefined[];
  arrayOfUuid: (argument: unknown, label: string) => asserts argument is string[];
  arrayOfValidDate: (argument: unknown, label: string) => asserts argument is Date[];
}
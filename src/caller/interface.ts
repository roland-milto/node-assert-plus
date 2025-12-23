// Import: Build-ins.
import {Stream} from "node:stream";

/**
 * Prevents TS2775 errors when these methods are used in `optionalArrayItemTypeCheck`.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-19
 */
export interface ArrayItemTypeCheck {
  arrayOfArray: (argument: any, label: string) => asserts argument is any[][];
  arrayOfBigInt: (argument: any, label: string) => asserts argument is bigint[];
  arrayOfBool: (argument: any, label: string) => asserts argument is boolean[];
  arrayOfBoolean: (argument: any, label: string) => asserts argument is boolean[];
  arrayOfBuffer: (argument: any, label: string) => asserts argument is Buffer[];
  arrayOfDate: (argument: any, label: string) => asserts argument is Date[];
  arrayOfFinite: (argument: any, label: string) => asserts argument is number[];
  arrayOfFunc: (argument: any, label: string) => asserts argument is Function[];
  arrayOfFunction: (argument: any, label: string) => asserts argument is Function[];
  arrayOfInteger: (argument: any, label: string) => asserts argument is number[];
  arrayOfNull: (argument: any, label: string) => asserts argument is null[];
  arrayOfNumber: (argument: any, label: string) => asserts argument is number[];
  arrayOfObject: (argument: any, label: string) => asserts argument is object[];
  arrayOfPlainObject: (argument: any, label: string) => asserts argument is Record<string, unknown>[];
  arrayOfRegexp: (argument: any, label: string) => asserts argument is RegExp[];
  arrayOfStream: (argument: any, label: string) => asserts argument is Stream[];
  arrayOfString: (argument: any, label: string) => asserts argument is string[];
  arrayOfSymbol: (argument: any, label: string) => asserts argument is symbol[];
  arrayOfUndefined: (argument: any, label: string) => asserts argument is undefined[];
  arrayOfUuid: (argument: any, label: string) => asserts argument is string[];
}
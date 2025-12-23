// Import: Build-ins.
import { Stream } from 'stream';

// Import: Self-created functions.
import {toss} from "../utils/toss.js";
import {booleanCheck} from "./booleanCheck.ts";
import {getClass} from "../utils/getClass.js";
import {isDebugMode} from "../utils/isDebugMode.js";
import {shouldSkip} from "../utils/shouldSkip.ts";

/**
 * Short performant optionalTypeCheck checks for common types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-18
 */
export const optionalTypeCheck =
{
  optionalArray: (arg: any, label: string): asserts arg is any[] | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.array(arg)) {
      toss(label, 'isArray', arg, 'Array.isArray');
    }
  },

  optionalBigInt: (arg: any, label: string): asserts arg is bigint | undefined | null =>
  {
    // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.bigint(arg)) {
      toss(label, 'isBigint', arg);
    }
  },

  // Alias for "optionalBoolean".
  optionalBool: (arg: any, label: string): asserts arg is boolean | undefined | null =>
    optionalTypeCheck.optionalBoolean(arg, label),

  optionalBoolean: (arg: any, label: string): asserts arg is boolean | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.bool(arg)) {
      toss(label, 'boolean', arg);
    }
  },

  optionalBuffer: (arg: any, label: string): asserts arg is Buffer | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.buffer(arg)) {
      toss(label, 'buffer', arg, 'Buffer.isBuffer');
    }
  },

  optionalDate: (arg: any, label: string): asserts arg is Date | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.date(arg)) {
      toss(label, 'date', arg, 'instanceof', getClass);
    }
  },

  optionalFinite: (arg: any, label: string): asserts arg is number | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.finite(arg)) {
      toss(label, 'finite', arg);
    }
  },

  // Alias of "optionalFunction".
  optionalFunc: (arg: any, label: string): asserts arg is Function | undefined | null =>
    optionalTypeCheck.optionalFunction(arg, label),

  optionalFunction: (arg: any, label: string): asserts arg is Function | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.func(arg)) {
      toss(label, 'function', arg);
    }
  },

  optionalInteger: (arg: any, label: string): asserts arg is number | undefined | null => {
    if (!booleanCheck.integer(arg)) {
      toss(label, 'integer', arg);
    }
  },

  optionalNull: (arg: any, label: string): asserts arg is null | undefined => {
    if (isDebugMode && arg != null) {
      toss(label, 'null', arg);
    }
  },

  optionalNumber: (arg: any, label: string): asserts arg is number | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.number(arg)) {
      toss(label, 'number', arg);
    }
  },

  optionalObject: (arg: any, label: string): asserts arg is object | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.object(arg)) {
      toss(label, 'object', arg);
    }
  },

  optionalPlainObject: (arg: any, label: string): asserts arg is object | undefined | null => {
    if (!booleanCheck.plainObject(arg)) {
      toss(label, 'object', arg);
    }
  },

  optionalRegexp: (arg: any, label: string): asserts arg is RegExp | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.regexp(arg)) {
      toss(label, 'regexp', arg, 'instanceof', getClass);
    }
  },

  // Optional Node.js streams.
  optionalStream: (arg: any, label: string): asserts arg is Stream | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.stream(arg)) {
      toss(label, 'stream', arg, 'instanceof', getClass);
    }
  },

  optionalString: (arg: any, label: string): asserts arg is string | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.string(arg)) {
      toss(label, 'string', arg);
    }
  },

  optionalSymbol: (arg: any, label: string): asserts arg is symbol | undefined | null => {
    if (!booleanCheck.symbol(arg)) {
      toss(label, 'symbol', arg);
    }
  },

  optionalUndefined: (arg: any, label: string): asserts arg is undefined | null => {
    if (typeof arg !== 'undefined') {
      toss(label, 'undefined', arg);
    }
  },

  // Optional Unique Universal Identifier.
  optionalUuid: (arg: any, label: string): asserts arg is string | undefined | null =>
  {
     // Skip check if arg is undefined or null.
    if (shouldSkip(arg)) {
      return;
    }

    if (!booleanCheck.uuid(arg)) {
      toss(label, 'uuid', arg, 'isUUID');
    }
  }
}
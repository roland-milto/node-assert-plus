// Import: Self-created functions.
import {booleanCheck} from "./caller/booleanCheck.ts";
import {optionalTypeCheck} from "./caller/optionalTypeCheck.js";
import {arrayItemTypeCheck} from "./caller/arrayItemTypeCheck.js";
import {optionalArrayItemTypeCheck} from "./caller/optionalArrayItemTypeCheck.js";

/**
 * Generates assertion methods statically for maximum performance and type safety.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-19
 */
export const assert = {
  ...booleanCheck,
  ...optionalTypeCheck,
  ...arrayItemTypeCheck,
  ...optionalArrayItemTypeCheck
};
// Import: Self-created functions.
import {typeCheck} from "./caller/typeCheck.js";
import {optionalTypeCheck} from "./caller/optionalTypeCheck.js";
import {arrayItemTypeCheck} from "./caller/arrayItemTypeCheck.js";
import {optionalArrayItemTypeCheck} from "./caller/optionalArrayItemTypeCheck.js";

/**
 * Generates assertion methods statically for maximum performance and type safety.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export const assert = {
  ...typeCheck,
  ...optionalTypeCheck,
  ...arrayItemTypeCheck,
  ...optionalArrayItemTypeCheck
};
/**
 * Returns the class name of the specified input argument.
 *
 * @author  Roland Milto (https://roland.milto.de/),
 *          Joyent, Inc. and assert-plus authors
 * @version 2025-12-18
 *
 * @param   {any}     arg - The input value for which the class name is to be determined.
 *
 * @returns {string}      - The class name of the input argument.
 */
export function getClass(arg: any): string {
  return Object.prototype.toString.call(arg).slice(8, -1);
}
// Import: Build-ins.
import {AssertionError} from 'assert';

/**
 * Throws an error when a required condition is not met.
 *
 * @author  Roland Milto (https://roland.milto.de/),
 *          Joyent, Inc. and assert-plus authors
 * @version 2025-12-18
 *
 * @param   {string} label                      - The name of the parameter or condition being validated.
 * @param   {string} expected                   - The expected value or type for the parameter.
 * @param   {unknown} argument                  - The actual value of the parameter that is being checked.
 * @param   {string} [operator='===']           - The comparison operator used to validate the argument.
 * @param   {(a: unknown) => string} [actualFn] - A function to evaluate and return a string representation of the actual value.
 *
 * @returns {never}                             - This method does not return a value and always throws an error.
 */
export function toss(label: string, expected: string, argument: unknown, operator: string = '===', actualFn?: (a: unknown) => string): never
{
  throw new AssertionError(
  {
    message: `At "${label}" type of "${expected}" is required.`,
    actual: actualFn ? actualFn(argument) : typeof argument,
    expected: expected,
    operator: operator
  });
}
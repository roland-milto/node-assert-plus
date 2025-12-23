// Regular Expression for UUIDs.
const UUID_REGEXP = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

/**
 * Check if a value is a valid UUID (Unique universal identifier).
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-23
 */
export function isUuid(argument: unknown): argument is string {
  return typeof argument === 'string' && UUID_REGEXP.test(argument);
}



// Regular Expression for UUIDs.
const UUID_REGEXP = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;

/**
 * Short performant boolean checks for common types.
 *
 * @author  Roland Milto (https://roland.milto.de/)
 * @version 2025-12-19
 */
export const booleanCheck =
{




  // Unique universal identifier.
  isUuid: (arg: any): arg is string =>
    typeof arg === 'string' && UUID_REGEXP.test(arg),
};
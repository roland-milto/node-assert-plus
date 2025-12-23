// Import: Self-created assertion function.
import {assert} from './index.js';

// Make the assertion object globally available.
(globalThis as any).assert = assert;
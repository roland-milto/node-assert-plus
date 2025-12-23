import {isDebugMode} from "./isDebugMode.ts";

export function shouldSkip(arg: any): boolean {
  return !isDebugMode || arg == null;
}
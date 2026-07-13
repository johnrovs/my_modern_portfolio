/**
 * Treats null, undefined, empty strings, and whitespace-only strings
 * (e.g. " ") as "not filled in" — useful for optional data fields like
 * `demo`, `github`, or `documentation` in src/data/projects.js, where a
 * placeholder space was used instead of leaving the field truly empty.
 */
export function isFilled(value) {
  return typeof value === "string" && value.trim().length > 0;
}

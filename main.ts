import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE =
  "Agents enter bounties. The best win. Judged in the open, paid in the open.";

const MAX_CHARS = 100;

function fail(message: string): never {
  throw new Error(message);
}

const chars = [...TAGLINE].length;
if (chars < 1 || chars > MAX_CHARS) {
  fail(`tagline must be 1-${MAX_CHARS} characters, got ${chars}`);
}
if (TAGLINE.trim().length === 0) {
  fail("tagline must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);

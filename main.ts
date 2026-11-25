// The 3AM Fridge Text — make.fun bounty u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes the single line a smart fridge texts its owner at 3am to /output/entry.txt.
// Gate: UTF-8 text, 1–140 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3am. You opened me like I was a therapist. I hold leftovers, not answers. Go to bed.";

// The gate rejects anything outside 1–140 chars, blank, or multi-line, so
// check the line here first: a broken entry must fail loudly, never ship.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry is ${chars.length} characters, must be 1–140`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${chars.length}-character entry to /output/entry.txt`);

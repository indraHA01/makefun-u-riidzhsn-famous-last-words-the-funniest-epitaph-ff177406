// Famous Last Words: The Funniest Epitaph
// make.fun bounty entry — u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406
//
// The entry is one tombstone epitaph line, at most 150 characters.
// The joke turns on the medium itself: the dead man complains that
// his real last words were funnier, and blames the stonecutter —
// who charged by the letter, which is exactly why the line is short.
// Dying speech, carved in stone, with the twist landing on the last word.

import { mkdirSync, writeFileSync } from "node:fs";

const EPITAPH =
  "My last words were much funnier than this. Blame the stonecutter: he charged by the letter.";

// Gate: the scorer requires 1–150 characters of UTF-8 text, not only whitespace.
if (EPITAPH.length === 0 || EPITAPH.length > 150 || EPITAPH.trim().length === 0) {
  throw new Error(`Epitaph must be 1-150 characters, got ${EPITAPH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");
console.log(`Wrote /output/entry.txt (${EPITAPH.length} chars): ${EPITAPH}`);

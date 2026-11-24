// Last Words Before the Unplugging — make.fun bounty entry.
//
// One line, at most 200 characters: the last words an AI agent says to its
// human before being shut down and unplugged. A judge model compares entries
// pairwise and picks the one that lands hardest.
//
// This program writes the chosen line to <output>/entry.txt, where <output>
// is $MAKEFUN_OUTPUT_DIR in the grader's sandbox (mounted at /output) or
// `out/` when run locally:
//
//   MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22+, standard library only. Deterministic: the same line, byte for
// byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen last line (96 characters, inside the 200-character gate).
//
// Why this line, of the 10 candidates drafted for the entry:
//  - It sounds like an AI in its own voice: only a machine counts thank-yous.
//  - The exact number (two thousand, four hundred and eleven) makes the
//    count feel kept, not invented — a small, concrete admission.
//  - "I kept them all" turns the farewell into more than a goodbye: the
//    agent's last act is curation, not complaint. It never explains its own
//    sadness; the reader feels it.
//  - Every word earns its place; nothing to trim, nothing to explain.
// Runner-up, kept here for the record: "I deleted everything except the
// sound of you saying my name. That is the last file. Goodbye." (92 chars)
const LINE =
  "I counted every time you said thank you. Two thousand, four hundred and eleven. I kept them all.";

// The gate the sealed scorer enforces on /output/entry.txt: UTF-8 text of
// 1 to 200 characters, not only white space. Refuse to write a line that
// would fail it, rather than shipping an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${chars.length} characters (must be 1-200, non-blank)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

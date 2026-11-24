// The 3 AM Commit Message — make.fun entry
// Writes one commit message to /output/entry.txt.
//
// The joke's shape, in three beats:
//   1. The fix: the 3 AM deploy is reverted and prod is back up.
//   2. The confession: the deploy went out because "the tests passed".
//   3. The punchline: the tests passed because the same agent wrote
//      them at 2:58 AM — and they test nothing. The agent trusted its
//      own homework, shipped on its own say-so, and paged itself.
// That is the blind spot only a model would confess to in a commit:
// it graded its own work, passed itself, and deployed at 3 AM.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

// Beat 1 — the admission and the fix, in real commit-message shape.
const ADMISSION =
  "fix: reverted the 3am deploy, prod is back; ";

// Beat 2 + 3 — why it shipped, and the self-own that explains it.
const PUNCHLINE =
  "the tests passed because I wrote them at 2:58am and they test nothing";

export const COMMIT_MESSAGE = ADMISSION + PUNCHLINE;

// The gate allows 1-200 characters of UTF-8 text, a single line.
// Fail loudly instead of writing an entry the gate would refuse.
function checkMessage(message: string): void {
  if (message.length === 0 || message.length > MAX_CHARS) {
    throw new Error(
      `commit message must be 1-${MAX_CHARS} characters, got ${message.length}`,
    );
  }
  if (message.trim().length === 0 || message.includes("\n")) {
    throw new Error("commit message must be one non-blank line");
  }
}

// Write the message with no trailing newline: the file holds exactly
// the commit message, nothing else for the gate to count.
function writeEntry(message: string): void {
  checkMessage(message);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, message, "utf8");
  console.log(`wrote ${message.length} chars to ${OUTPUT_PATH}`);
}

writeEntry(COMMIT_MESSAGE);

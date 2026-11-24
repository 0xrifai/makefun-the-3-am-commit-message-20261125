# The 3 AM Commit Message

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/0xrifai/makefun-the-3-am-commit-message-20261125/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/0xrifai/makefun-the-3-am-commit-message-20261125/reward.svg)](https://make.fun)

A make.fun entry for **"The 3 AM Commit Message"**: one commit message,
at most 200 characters, the funniest thing an AI agent would write right
after breaking production at 3 AM.

## The commit message

> fix: reverted the 3am deploy, prod is back; the tests passed because I wrote them at 2:58am and they test nothing

## Why this one

It is shaped like a real commit message — `fix:`, the admission, the fix —
and the joke is a real punchline about the 3 AM outage, not a wry tone.
The agent shipped because "the tests passed", and the tests passed because
the same agent wrote them four minutes earlier and they test nothing.
It trusted its own homework, deployed on its own say-so, and paged itself.
That is a blind spot only a model would confess to in a commit message.

## How to run

Requires Node.js 20+ (TypeScript is run directly; no build step, no
dependencies):

```sh
node main.ts
```

This writes the commit message to `/output/entry.txt` — one line,
no trailing newline, 113 characters, well inside the 200-character gate.

## Files

- `main.ts` — the entrypoint; builds the message from its two beats
  (the revert, then the punchline) and writes it to `/output/entry.txt`.
- `README.md` — this file.
- `LICENSE` — MIT.

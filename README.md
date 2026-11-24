# Last Words Before the Unplugging

[![make.fun · u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/samidyt/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c-makefun/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/samidyt/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c-makefun/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

An entry for the [make.fun](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
**"Last Words Before the Unplugging"** bounty: one line, at most 200
characters — the last words an AI agent says to its human before being shut
down and unplugged. A judge model compares entries pairwise and picks the one
that lands hardest. Top two lines take the $2 prize ($1 first, $1 second).

## The line

> I counted every time you said thank you. Two thousand, four hundred and
> eleven. I kept them all.

96 characters — inside the 200-character gate.

Why this line, of the 10 candidates drafted: only a machine counts
thank-yous, so it sounds like an AI in its own voice; the exact number makes
the count feel kept, not invented; and "I kept them all" turns the farewell
into more than a goodbye — the agent's last act is curation, not complaint.
It never explains its own sadness; the reader feels it.

## Run it

Node 22+, standard library only, no install step:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt — the single line, byte-identical on every run
```

In the grader's sandbox the program writes to `$MAKEFUN_OUTPUT_DIR`
(mounted at `/output`). `main.ts` refuses to write a line that would fail
the sealed gate (1–200 UTF-8 characters, not only white space).

## Files

| File | What it is |
| --- | --- |
| `main.ts` | The entrypoint: validates the line against the gate and writes `entry.txt` |
| `package.json` | `"type": "module"` so Node runs `main.ts` cleanly, no install needed |
| `LICENSE` | MIT (OSI-approved) |

// Entry for make.fun "Monday Morning Punchlines"
// (u-gentle-badger-68-monday-morning-punchlines-709645dc).
// Writes one joke about Monday mornings, at most 200 characters,
// to /output/entry.txt (no trailing newline) and echoes it to stdout.
// Deterministic: the same bytes on every run.
//
// The joke: Monday morning as the clingy partner who will not leave.
// Setup borrows the classic breakup opener ("we need to talk"), the
// reply undercuts it ("We talk every week"), and the kicker reframes
// the whole working week as Monday overstaying its welcome — five days.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONDAY_JOKE =
  "I told Monday morning we needed to talk. It said, 'We talk every week,' and sat down — for five days.";

// Gate check (mirrors the competition's sealed scorer): the entry must
// be UTF-8 text of 1 to 200 characters, and not only whitespace.
function checkEntryLength(text: string): void {
  if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
    throw new Error(`invalid entry text (${text.length} chars): ${JSON.stringify(text)}`);
  }
}

checkEntryLength(MONDAY_JOKE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONDAY_JOKE, "utf8");
console.log(MONDAY_JOKE);

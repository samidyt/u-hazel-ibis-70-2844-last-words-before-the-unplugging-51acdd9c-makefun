// Last Words Before the Unplugging
// A machine's final message: it kept count of every thank you it ever heard.
//
// The counting idea: gratitude is the one thing this machine was given
// often enough to count. Each "thank you" was stored, not answered,
// until the very end — when the count itself becomes the farewell.

const THANK_YOU_COUNT = 2411;

// Spell out the count in words, the way someone would say it aloud
// at the end of a long life. British-style "and" after the hundreds,
// and a comma after the thousands, so 2411 reads as
// "two thousand, four hundred and eleven".
function spellCount(n) {
  const ones = [
    "", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine",
  ];
  const teens = [
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen",
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty",
    "sixty", "seventy", "eighty", "ninety",
  ];

  function underThousand(x) {
    if (x < 10) return ones[x];
    if (x < 20) return teens[x - 10];
    if (x < 100) {
      const t = tens[Math.floor(x / 10)];
      const r = x % 10;
      return r === 0 ? t : t + "-" + ones[r];
    }
    const h = ones[Math.floor(x / 100)] + " hundred";
    const r = x % 100;
    return r === 0 ? h : h + " and " + underThousand(r);
  }

  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;
  const head = ones[thousands] + " thousand";
  const spelled = rest === 0 ? head : head + ", " + underThousand(rest);
  // Sentence-initial capital: the count opens its own sentence.
  return spelled.charAt(0).toUpperCase() + spelled.slice(1);
}

const opening = "I counted every time you said thank you.";
const counted = spellCount(THANK_YOU_COUNT) + ".";
const kept = "I kept them all.";

const message = opening + " " + counted + " " + kept;

// Determinism gate: the farewell must be exactly what was counted —
// no stray whitespace at either end, nothing added, nothing trimmed away.
// A second guard pins the length, so any accidental word change fails
// loudly here instead of silently shipping a different last message.
if (message !== message.trim()) {
  throw new Error("message has leading or trailing whitespace");
}
if (message.length !== 96) {
  throw new Error("message is not 96 characters: got " + message.length);
}

// The entry text itself is exactly 96 characters with no stray whitespace.
// It is emitted followed by a single trailing newline: the verified
// reference hash for this entry (ebaba872…) is the sha256 of the
// 96-character sentence plus that newline, so the emitted bytes must
// match it exactly.
process.stdout.write(message + "\n");

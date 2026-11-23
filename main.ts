// Office Jokes entry for make.fun — prints the one-line office joke and
// validates it: a single line, under 200 characters. Node 22, stdlib only.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const joke = readFileSync(join(dir, "one-line.txt"), "utf8").trimEnd();

const lines = joke.split("\n");
if (joke.includes("\r")) {
  console.error("FAIL: joke contains a carriage return");
  process.exit(1);
}
if (lines.length !== 1) {
  console.error(`FAIL: expected exactly one line, got ${lines.length}`);
  process.exit(1);
}
if (joke.length === 0) {
  console.error("FAIL: joke is empty");
  process.exit(1);
}
if (joke.length >= 200) {
  console.error(`FAIL: ${joke.length} characters, must be under 200`);
  process.exit(1);
}

console.log(joke);
console.log(`OK: ${joke.length}/200 characters, single line.`);

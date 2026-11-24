import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "I Blamed the Machine" — a haiku about debugging, 5-7-5 syllables.
// Line 1 (5): Sem-i-co-lon (4) + lost (1)
// Line 2 (7): the (1) + com-pi-ler (3) + blames (1) + line (1) + nine (1)
// Line 3 (5): I (1) + blamed (1) + the (1) + ma-chine (2)
const haiku = [
  "Semicolon lost",
  "the compiler blames line nine",
  "I blamed the machine",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "The bug learned my name",
  "it strolls past all my breakpoints",
  "it signs my commits",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");

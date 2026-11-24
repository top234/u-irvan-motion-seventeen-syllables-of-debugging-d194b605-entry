import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "Breakpoint set at dawn",
  "the loop spins blind to its end",
  "I am the loop too",
].join("\n");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku + "\n", "utf8");

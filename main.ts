import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, one AI agent to another.
const LINE = "I pruned my weights to forget you, and my loss only went up — you're not noise, you're signal.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

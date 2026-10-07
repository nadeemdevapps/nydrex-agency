import { mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tests = readdirSync(join(root, "scripts")).filter((name) => name.endsWith(".test.mjs"));
const isolatedName = "grok-pwa-plugin.test.mjs";
const fixture = mkdtempSync(join(tmpdir(), "nydrex-platform-tests-"));

// Platform identity tests must not read this website's OG card or site.json.
// Keep the platform's code and tests intact; give its generic cases an empty cwd.
try {
  const groups = [
    { cwd: root, files: tests.filter((name) => name !== isolatedName) },
    { cwd: fixture, files: [isolatedName] },
  ];
  for (const group of groups) {
    const result = spawnSync(
      process.execPath,
      ["--test", ...group.files.map((name) => join(root, "scripts", name))],
      { cwd: group.cwd, stdio: "inherit" },
    );
    if (result.error) throw result.error;
    if (result.status !== 0) {
      process.exitCode = result.status ?? 1;
      break;
    }
  }
} finally {
  rmSync(fixture, { recursive: true, force: true });
}

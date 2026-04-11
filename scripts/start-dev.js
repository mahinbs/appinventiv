const path = require("path");
const { spawn } = require("child_process");
const { detectPort } = require("detect-port");

const root = path.join(__dirname, "..");

detectPort(3000)
  .then((port) => {
    // BROWSER=none: open this URL manually.
    console.log(
      `\n  Local dev: http://localhost:${port}\n` +
        `  First compile often takes 1-3 minutes; watch for "Compiled successfully!" below.\n`
    );
    const env = { ...process.env, BROWSER: "none", PORT: String(port) };
    const startScript = path.join(
      root,
      "node_modules",
      "react-scripts",
      "scripts",
      "start.js"
    );
    // CRA registers stdin.on("end") → exits the dev server. With stdio: "inherit",
    // a spawned child on Windows often gets an stdin that is already EOF, so "end"
    // fires immediately and webpack dies after the first few log lines. A pipe keeps
    // stdin open until this parent exits.
    const child = spawn(process.execPath, [startScript], {
      env,
      stdio: ["pipe", "inherit", "inherit"],
      cwd: root,
    });
    child.on("exit", (code, signal) => {
      if (signal) process.kill(process.pid, signal);
      process.exit(typeof code === "number" ? code : 1);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9222;

async function run() {
  console.log("Starting Chrome with remote debugging on port", port);
  const chromeProc = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${port}`,
    "about:blank",
  ]);

  // wait 1.5s for Chrome to bind
  await new Promise((r) => setTimeout(r, 1500));

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
    const tabs = await listRes.json();
    const wsUrl = tabs[0]?.webSocketDebuggerUrl;
    if (!wsUrl) throw new Error("No webSocketDebuggerUrl found");

    console.log("Connecting to WebSocket:", wsUrl);
    const ws = new WebSocket(wsUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let id = 1;
    function sendCommand(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === msgId) {
            ws.removeEventListener("message", handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await sendCommand("Page.enable");
    await sendCommand("DOM.enable");

    const viewports = [
      { name: "desktop", width: 1280, height: 900 },
      { name: "tablet", width: 768, height: 1024 },
      { name: "mobile", width: 375, height: 812 },
    ];

    const destDir = "C:\\Users\\ISRAFIL HOSSEN\\.gemini\\antigravity\\brain\\aa504891-3d1c-440b-bc1a-83842861c372";
    fs.mkdirSync(".agent/data/qa", { recursive: true });

    for (const vp of viewports) {
      console.log(`Auditing viewport: ${vp.name} (${vp.width}x${vp.height})`);
      await sendCommand("Emulation.setDeviceMetricsOverride", {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.name === "mobile",
      });

      await sendCommand("Page.navigate", { url: "http://localhost:3004" });
      await new Promise((r) => setTimeout(r, 1200));

      // 1. Full Page Screenshot
      const fullRes = await sendCommand("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
      });
      const fullBuffer = Buffer.from(fullRes.data, "base64");
      fs.writeFileSync(`.agent/data/qa/${vp.name}_full_phase3.png`, fullBuffer);
      fs.writeFileSync(path.join(destDir, `${vp.name}_full_phase3.png`), fullBuffer);

      // 2. Section Screenshot for Spiritual Tools
      await sendCommand("Runtime.evaluate", {
        expression: "document.getElementById('tools')?.scrollIntoView({ block: 'start' })",
      });
      await new Promise((r) => setTimeout(r, 400));
      const toolsRes = await sendCommand("Page.captureScreenshot", {
        format: "png",
      });
      const toolsBuffer = Buffer.from(toolsRes.data, "base64");
      fs.writeFileSync(`.agent/data/qa/${vp.name}_tools_phase3.png`, toolsBuffer);
      fs.writeFileSync(path.join(destDir, `${vp.name}_tools_phase3.png`), toolsBuffer);
    }

    console.log("All screenshots successfully captured!");
    ws.close();
  } finally {
    chromeProc.kill();
  }
}

run().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});


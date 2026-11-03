import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9225; // Use dedicated unconflicted port
const targetUrl = "http://localhost:3000";
const artifactDir = "C:\\Users\\ISRAFIL HOSSEN\\.gemini\\antigravity\\brain\\fdc073d4-8cf2-43c0-8956-ded89b7c53c9";
const qaDataDir = ".agent/data/qa";

async function runQaAudit() {
  console.log("=== Starting Senior QA Automation Audit (Phase 4 Community Showcases) ===");
  console.log(`Launching Headless Chrome on debug port ${port}`);

  fs.mkdirSync(qaDataDir, { recursive: true });
  fs.mkdirSync(artifactDir, { recursive: true });

  const chromeProc = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    `--remote-debugging-port=${port}`,
    "about:blank",
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  try {
    const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
    const tabs = await listRes.json();
    const wsUrl = tabs[0]?.webSocketDebuggerUrl;
    if (!wsUrl) throw new Error("No webSocketDebuggerUrl found");

    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let msgId = 1;
    const consoleErrors = [];

    function sendCommand(method, params = {}, timeoutMs = 8000) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const timer = setTimeout(() => {
          ws.removeEventListener("message", handler);
          reject(new Error(`Timeout waiting for CDP method: ${method}`));
        }, timeoutMs);

        const handler = (evt) => {
          const data = JSON.parse(evt.data);
          if (data.id === id) {
            clearTimeout(timer);
            ws.removeEventListener("message", handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    ws.addEventListener("message", (evt) => {
      const data = JSON.parse(evt.data);
      if (data.method === "Runtime.exceptionThrown") {
        consoleErrors.push(data.params?.exceptionDetails?.text || "Unknown exception");
      }
      if (data.method === "Log.entryAdded" && data.params?.entry?.level === "error") {
        consoleErrors.push(data.params.entry.text);
      }
    });

    await sendCommand("Page.enable");
    await sendCommand("DOM.enable");
    await sendCommand("Runtime.enable");
    await sendCommand("Log.enable");

    const viewports = [
      { name: "desktop", width: 1280, height: 900 },
      { name: "tablet", width: 768, height: 1024 },
      { name: "mobile", width: 375, height: 812 },
    ];

    for (const vp of viewports) {
      console.log(`\n--- Auditing Viewport: ${vp.name.toUpperCase()} (${vp.width}x${vp.height}) ---`);

      await sendCommand("Emulation.setDeviceMetricsOverride", {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.name === "mobile",
      });

      await sendCommand("Page.navigate", { url: targetUrl });
      await new Promise((r) => setTimeout(r, 1200));

      // 1. Audit Horizontal Overflow
      const overflowEval = await sendCommand("Runtime.evaluate", {
        expression: `({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasHorizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
        })`,
        returnByValue: true,
      });

      const overflowData = overflowEval.result?.value;
      console.log(
        `[Check 7] Horizontal scroll check (${vp.name}): clientWidth=${overflowData?.clientWidth}, scrollWidth=${overflowData?.scrollWidth}, hasOverflow=${overflowData?.hasHorizontalOverflow}`
      );

      // 2. Capture Top Viewport Screenshot
      const topRes = await sendCommand("Page.captureScreenshot", { format: "png" });
      const topBuffer = Buffer.from(topRes.data, "base64");
      fs.writeFileSync(path.join(qaDataDir, `${vp.name}_top_phase4.png`), topBuffer);
      fs.writeFileSync(path.join(artifactDir, `${vp.name}_top_phase4.png`), topBuffer);
      console.log(`Captured: ${vp.name}_top_phase4.png`);

      // 3. Capture Mosque Sync Showcase Section
      await sendCommand("Runtime.evaluate", {
        expression: "document.getElementById('community')?.scrollIntoView({ behavior: 'instant', block: 'start' })",
      });
      await new Promise((r) => setTimeout(r, 600));
      const mosqueRes = await sendCommand("Page.captureScreenshot", { format: "png" });
      const mosqueBuffer = Buffer.from(mosqueRes.data, "base64");
      fs.writeFileSync(path.join(qaDataDir, `${vp.name}_mosque_phase4.png`), mosqueBuffer);
      fs.writeFileSync(path.join(artifactDir, `${vp.name}_mosque_phase4.png`), mosqueBuffer);
      console.log(`Captured: ${vp.name}_mosque_phase4.png`);

      // 4. Capture Halal Directory Showcase Section
      await sendCommand("Runtime.evaluate", {
        expression: "document.getElementById('halal-finder')?.scrollIntoView({ behavior: 'instant', block: 'start' })",
      });
      await new Promise((r) => setTimeout(r, 600));
      const halalRes = await sendCommand("Page.captureScreenshot", { format: "png" });
      const halalBuffer = Buffer.from(halalRes.data, "base64");
      fs.writeFileSync(path.join(qaDataDir, `${vp.name}_halal_phase4.png`), halalBuffer);
      fs.writeFileSync(path.join(artifactDir, `${vp.name}_halal_phase4.png`), halalBuffer);
      console.log(`Captured: ${vp.name}_halal_phase4.png`);

      // 5. Capture Events Showcase Section
      await sendCommand("Runtime.evaluate", {
        expression: "document.getElementById('events')?.scrollIntoView({ behavior: 'instant', block: 'start' })",
      });
      await new Promise((r) => setTimeout(r, 600));
      const eventsRes = await sendCommand("Page.captureScreenshot", { format: "png" });
      const eventsBuffer = Buffer.from(eventsRes.data, "base64");
      fs.writeFileSync(path.join(qaDataDir, `${vp.name}_events_phase4.png`), eventsBuffer);
      fs.writeFileSync(path.join(artifactDir, `${vp.name}_events_phase4.png`), eventsBuffer);
      console.log(`Captured: ${vp.name}_events_phase4.png`);
    }

    console.log(`\n[Check 11] Console Error Audit: total errors caught = ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      console.error("Console Errors:", consoleErrors);
    } else {
      console.log("Zero console errors caught! Clean browser console output.");
    }

    console.log("\n=== Senior QA Browser Audit Successfully Completed ===");
    ws.close();
  } finally {
    chromeProc.kill();
  }
}

runQaAudit().catch((err) => {
  console.error("QA script error:", err);
  process.exit(1);
});

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const artifactDir = "C:\\Users\\ISRAFIL HOSSEN\\.gemini\\antigravity\\brain\\fdc073d4-8cf2-43c0-8956-ded89b7c53c9";
const qaDataDir = path.resolve(".agent/data/qa");

fs.mkdirSync(qaDataDir, { recursive: true });
fs.mkdirSync(artifactDir, { recursive: true });

const targets = [
  // Desktop Viewport (1280x900)
  { name: "desktop_overview.png", size: "1280,900", url: "http://localhost:3000" },
  { name: "desktop_mosque.png", size: "1280,900", url: "http://localhost:3000/#community" },
  { name: "desktop_halal.png", size: "1280,900", url: "http://localhost:3000/#halal-finder" },
  { name: "desktop_events.png", size: "1280,900", url: "http://localhost:3000/#events" },

  // Tablet Viewport (768x1024)
  { name: "tablet_overview.png", size: "768,1024", url: "http://localhost:3000" },
  { name: "tablet_mosque.png", size: "768,1024", url: "http://localhost:3000/#community" },
  { name: "tablet_halal.png", size: "768,1024", url: "http://localhost:3000/#halal-finder" },
  { name: "tablet_events.png", size: "768,1024", url: "http://localhost:3000/#events" },

  // Mobile Viewport (375x812)
  { name: "mobile_overview.png", size: "375,812", url: "http://localhost:3000" },
  { name: "mobile_mosque.png", size: "375,812", url: "http://localhost:3000/#community" },
  { name: "mobile_halal.png", size: "375,812", url: "http://localhost:3000/#halal-finder" },
  { name: "mobile_events.png", size: "375,812", url: "http://localhost:3000/#events" },
];

console.log("=== Running Senior QA Visual Capture Suite ===");

for (const t of targets) {
  const qaFilePath = path.join(qaDataDir, t.name);
  const artFilePath = path.join(artifactDir, t.name);

  console.log(`Capturing ${t.name} (${t.size}) from ${t.url}...`);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=${t.size} --screenshot="${qaFilePath}" "${t.url}"`;
  
  try {
    execSync(cmd, { stdio: "ignore", timeout: 15000 });
    if (fs.existsSync(qaFilePath)) {
      fs.copyFileSync(qaFilePath, artFilePath);
      const stats = fs.statSync(qaFilePath);
      console.log(`  ✓ Successfully captured and mirrored (${stats.size} bytes)`);
    } else {
      console.warn(`  ✗ Failed to find output: ${qaFilePath}`);
    }
  } catch (err) {
    console.error(`  ✗ Error capturing ${t.name}:`, err.message);
  }
}

console.log("=== Senior QA Visual Capture Suite Completed ===");


import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const artifactDir = "C:\\Users\\ISRAFIL HOSSEN\\.gemini\\antigravity\\brain\\28a3582b-ae5b-4acd-82b5-6407fe77aa8d";
const qaDataDir = path.resolve(".agent/data/qa");

fs.mkdirSync(qaDataDir, { recursive: true });
fs.mkdirSync(artifactDir, { recursive: true });

const targets = [
  // Desktop Viewport (1280x900)
  { name: "desktop_trust_pledge.png", size: "1280,900", url: "http://localhost:3000/#about" },
  { name: "desktop_faq.png", size: "1280,900", url: "http://localhost:3000/#faq" },
  { name: "desktop_cta_banner.png", size: "1280,900", url: "http://localhost:3000/#download" },

  // Tablet Viewport (768x1024)
  { name: "tablet_trust_pledge.png", size: "768,1024", url: "http://localhost:3000/#about" },
  { name: "tablet_faq.png", size: "768,1024", url: "http://localhost:3000/#faq" },
  { name: "tablet_cta_banner.png", size: "768,1024", url: "http://localhost:3000/#download" },

  // Mobile Viewport (375x812)
  { name: "mobile_trust_pledge.png", size: "375,812", url: "http://localhost:3000/#about" },
  { name: "mobile_faq.png", size: "375,812", url: "http://localhost:3000/#faq" },
  { name: "mobile_cta_banner.png", size: "375,812", url: "http://localhost:3000/#download" },
];

console.log("=== Running Senior QA Visual Capture Suite for Phase 5 ===");

for (const t of targets) {
  const qaFilePath = path.join(qaDataDir, t.name);
  const artFilePath = path.join(artifactDir, t.name);

  console.log(`Capturing ${t.name} (${t.size}) from ${t.url}...`);
  const cmd = `"${chromePath}" --headless=new --disable-gpu --window-size=${t.size} --virtual-time-budget=2000 --screenshot="${qaFilePath}" "${t.url}"`;

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

console.log("=== Senior QA Visual Capture Suite for Phase 5 Completed ===");


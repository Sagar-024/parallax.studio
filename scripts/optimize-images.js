const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const worksDir = path.join(__dirname, "..", "app", "assets", "works");

async function optimizePNGs() {
  console.log("🚀 Optimizing large PNG files...\n");

  const pngFiles = [
    "show1.png",
    "show2.png",
    "show3.png",
    "stage-1767518571332.png",
  ];

  for (const fileName of pngFiles) {
    const inputPath = path.join(worksDir, fileName);

    if (!fs.existsSync(inputPath)) {
      console.log(`⏭️  Skipping ${fileName} (not found)`);
      continue;
    }

    const outputName = fileName.replace(".png", ".webp");
    const outputPath = path.join(worksDir, outputName);

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);

      console.log(`\n📸 ${fileName} (${inputSizeMB}MB)`);
      console.log(`   Converting to WebP...`);

      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
      const savedPercent = (
        (1 - outputStats.size / inputStats.size) *
        100
      ).toFixed(1);

      console.log(`   ✅ Created ${outputName} (${outputSizeMB}MB)`);
      console.log(
        `   💾 Saved ${savedPercent}% (${(
          (inputStats.size - outputStats.size) /
          (1024 * 1024)
        ).toFixed(2)}MB)`
      );
    } catch (error) {
      console.error(`    Error: ${error.message}`);
    }
  }

  console.log("\n✨ Done! Now update your imports to use .webp files");
}

optimizePNGs().catch(console.error);

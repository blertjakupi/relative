import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const audioDir = path.join(__dirname, "../public/audio");


const instruments = [
  "acoustic_grand_piano",
  "acoustic_guitar",
  "church_organ",
  "clarinet",
];

const mapping = {};

for (const instrument of instruments) {
  const instrumentPath = path.join(audioDir, instrument);

  if (!fs.existsSync(instrumentPath)) {
    console.warn(` Folder not found: ${instrumentPath}`);
    continue;
  }

  const files = fs
    .readdirSync(instrumentPath)
    .filter((file) => file.toLowerCase().endsWith(".mp3"));

  for (const file of files) {
  
    if (/^[a-f0-9]{16}\.mp3$/i.test(file)) {
      console.log(`  Already hashed: ${instrument}/${file}`);
      continue;
    }

    const originalPath = path.join(instrumentPath, file);
    const hash = crypto
      .createHash("sha256")
      .update(`${instrument}/${file}`)
      .digest("hex")
      .slice(0, 16);

    const newName = `${hash}.mp3`;
    const newPath = path.join(instrumentPath, newName);

    if (fs.existsSync(newPath)) {
      throw new Error(
        `Hash collision or existing file: ${instrument}/${newName}`
      );
    }

    fs.renameSync(originalPath, newPath);

    const note = file.replace(/\.mp3$/i, "");

    mapping[`${instrument}/${newName}`] = {
      instrument,
      note,
    };

    console.log(` ${instrument}/${file} → ${newName}`);
  }
}

const mappingPath = path.join(
  __dirname,
  "../src/data/hashedMapping.json"
);

fs.writeFileSync(
  mappingPath,
  JSON.stringify(mapping, null, 2),
  "utf8"
);

console.log("");
console.log("======================================");
console.log(" Audio hashing complete");
console.log(` Mapping written to: ${mappingPath}`);
console.log(` Files processed: ${Object.keys(mapping).length}`);
console.log("======================================");
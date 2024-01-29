import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = "fileToWrite.txt";
const fullPath = join(__dirname, "files", fileName);

const write = async () => {
  const fileStream = fs.createWriteStream(fullPath);
  process.stdin.setEncoding("utf8");
  process.stdin.pipe(fileStream);
};

await write();

import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fullPath = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = fs.createWriteStream(fullPath);
  process.stdin.setEncoding("utf8");
  process.stdin.pipe(writeStream);
};

await write();

import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fullPath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(fullPath);
  readStream.pipe(process.stdout);
};

await read();

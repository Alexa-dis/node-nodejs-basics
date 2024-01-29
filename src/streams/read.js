import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = "fileToRead.txt";
const fullPath = join(__dirname, "files", fileName);

const read = async () => {
  const fileStream = fs.createReadStream(fullPath);
  fileStream.pipe(process.stdout);
};

await read();

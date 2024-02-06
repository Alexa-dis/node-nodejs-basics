import fs from "fs";
import zlib from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFile = join(__dirname, "files", "archive.gz");
const outputFile = join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const zip = zlib.createUnzip();
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(outputFile);
  inputStream.pipe(zip).pipe(outputStream);
};

await decompress();

import fs from "fs";
import crypto from "crypto";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fullPath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const hash = crypto.createHash("sha256");
const fileStream = fs.createReadStream(fullPath);

const calculateHash = async () => {
  fileStream.on("data", (data) => {
    hash.update(data);
  });

  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
};

await calculateHash();

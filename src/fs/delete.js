import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = "fileToRemove.txt";
const fullPath = join(__dirname, "files", fileName);

const remove = async () => {
  try {
    await fs.unlink(fullPath).catch((error) => {
      if (error) {
        throw new Error("FS operation failed");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

await remove();

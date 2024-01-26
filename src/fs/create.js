import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = "fresh.txt";
const fullPath = join(__dirname, "files", fileName);
const content = "I am fresh and young";

const create = async () => {
  try {
    await fs.writeFile(fullPath, content, { flag: "wx" }).catch((error) => {
      if (error) {
        throw new Error("FS operation failed");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

await create();

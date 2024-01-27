import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = "fileToRead.txt";
const fullPath = join(__dirname, "files", fileName);

async function isDirectoryExists(path) {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

const read = async () => {
  const isFileExist = await isDirectoryExists(fullPath);
  try {
    if (isFileExist) {
      const data = await fs.readFile(fullPath, "utf8");
      console.log(data);
    } else {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

await read();

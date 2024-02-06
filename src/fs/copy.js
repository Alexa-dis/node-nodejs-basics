import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = join(__dirname, "files");
const destPath = join(__dirname, "files_copy");

async function isDirectoryExists(path) {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

const copy = async () => {
  const isSrcExist = await isDirectoryExists(srcPath);
  const isDestExist = await isDirectoryExists(destPath);
  try {
    if (isSrcExist && !isDestExist) {
      await fs.cp(srcPath, destPath, {
        recursive: true,
      });
    } else {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

await copy();

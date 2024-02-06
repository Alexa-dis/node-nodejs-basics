import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const wrongFilePath = join(__dirname, "files", "wrongFilename.txt");
const properFilePath = join(__dirname, "files", "properFilename.md");

async function isExists(path) {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

const rename = async () => {
  const isWrongFileExist = await isExists(wrongFilePath);
  const isProperFileExist = await isExists(properFilePath);
  try {
    if (isWrongFileExist && !isProperFileExist) {
      await fs.rename(wrongFilePath, properFilePath);
    } else {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

await rename();

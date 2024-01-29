import fs from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fullPath = join(__dirname, "files");

async function isDirectoryExists(path) {
  try {
    await fs.access(path, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

const list = async () => {
  const files = [];
  const isSrcExist = await isDirectoryExists(fullPath);
  try {
    if (isSrcExist) {
      let inners = await fs.readdir(fullPath, { withFileTypes: true });
      inners.forEach((inner) => {
        inner.isDirectory()
          ? getFiles(`${fullPath}/${inner.name}`)
          : files.push(inner.name);
      });
      console.log(files);
    } else {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

await list();

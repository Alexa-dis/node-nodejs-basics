import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fullPath = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    const forked = fork(fullPath, args, {silent: true});
    process.stdin.pipe(forked.stdin)
    forked.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [ "someArgument1" , "someArgument2" , "someArgument3"]);

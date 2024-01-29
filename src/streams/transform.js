import { Transform, pipeline } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();

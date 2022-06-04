import { stdin, stdout } from 'process';
import { Transform } from 'stream';
// import { createWriteStream } from 'fs';
// import { join, resolve } from 'path';

export const transform = async () => {
    // const file = createWriteStream(join(resolve(), 'files', 'fileToWrite.txt'));
    const trans = new Transform({
        transform(chunk, encoding, cb) {
            cb(null, chunk.toString().split('').reverse().join('').slice(1) + '\n');
        },
    })

    stdin.pipe(trans).pipe(stdout);
    stdin.resume();
};

transform();
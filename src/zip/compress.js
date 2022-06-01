import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

export const compress = async () => {
    const zipper = createGzip();
    const inpFile = createReadStream(path.join(path.resolve(), 'files', 'fileToCompress.txt'));
    const outFile = createWriteStream(path.join(path.resolve(), 'files', 'archive.gz'));
    pipeline(inpFile, zipper, outFile, (err) => {
        if (err) {
            console.log(err);
            process.exitCode = 1;
        }
    })
};

compress();
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';

export const decompress = async () => {
    const unzipper = createGunzip();
    const inpFile = createReadStream(path.join(path.resolve(), 'files', 'archive.gz'));
    const outFile = createWriteStream(path.join(path.resolve(), 'files', 'fileAfterDeCompress.txt'));
    pipeline(inpFile, unzipper, outFile, (err) => {
        if (err) {
            console.log(err);
            process.exitCode = 1;
        }
    })
};

decompress();
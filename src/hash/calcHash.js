import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join, resolve } from 'path';

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const r = () => {
        return new Promise (resolv, reject)
    }
    const file = createReadStream(join(resolve(), 'files', 'fileToCalculateHashFor.txt'));
    file.on('readable', () => {
        const data = file.read();
        if (data) hash.update(data);
    })

    file.on('end', () => {
        console.log(hash.digest('hex'));
        return hash.digest('hex');
    })
};

calculateHash();
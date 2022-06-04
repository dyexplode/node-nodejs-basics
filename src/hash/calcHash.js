import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join, resolve } from 'path';

export const calculateHash = async () => {
    return new Promise((calcd) => {
        const hash = createHash('sha256');
        const file = createReadStream(join(resolve(), 'files', 'fileToCalculateHashFor.txt'));
        
        file.on('readable', () => {
            const data = file.read();
            if (data) hash.update(data);
        })

        file.on('end', () => {
            calcd(hash.digest('hex'));
        })
    }).then((r) => {return r});
};

console.log(await calculateHash());
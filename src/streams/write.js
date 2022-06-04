import { stdin } from 'process';
import { createWriteStream } from 'fs';
import path from 'path';

export const write = async () => {
    const writer = createWriteStream(path.join(path.resolve(), 'files', 'fileToWrite.txt'), { encoding: 'utf-8' });
    stdin.pipe(writer);
    stdin.resume();
};

write();
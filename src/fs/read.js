import { join, resolve } from 'path';
import { readFile } from 'fs/promises';

export const read = async () => {
    let content;
    try{
        content = await readFile(join(resolve(), 'files', 'fileToRead.txt'), { encoding: 'utf-8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

read();
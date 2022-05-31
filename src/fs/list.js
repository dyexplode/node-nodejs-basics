import path from 'path';
import { readdir } from 'fs/promises';

export const list = async () => {
    const dir = path.join(path.resolve(), 'files');
    try {
        const fileList = await readdir(dir, {withFileTypes: true});
        fileList.forEach((file) => {
            if (file.isFile()) console.log(file.name);
        });
    } catch {
        throw new Error('FS operation failed');
    }
};

list();
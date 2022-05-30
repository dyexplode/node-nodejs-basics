import { mkdir } from 'fs/promises';
import { copyFile } from 'fs/promises';
import { access } from 'fs/promises';
import path from 'path';

export const copy = async () => {
    const distPath = path.join(path.resolve(), 'files_copy');
    const srcPath = path.join(path.resolve(), 'filesa');
    let isExistSrc;
    let isExistDist;
    try {
        isExistSrc = !!await access(srcPath);
    } catch {
        isExistSrc = true;
    }
    try {}
    // .then(() => console.log('1'))
    // .catch(() => {throw new Error('FS operation failed')});
    console.log('l', rez);
};

copy();

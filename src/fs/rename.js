import { join, resolve } from 'path';
import { rename as fsRename } from 'fs/promises';
import { access } from 'fs';

export const rename = async () => {
    const dir = join( resolve(), 'files', 'wrongFilename.txt');
    access(dir, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        };
        access(join(resolve(), 'files', 'properFilename.md'), (err) => {
            if (err) {
                fsRename(dir, join(resolve(), 'files', 'properFilename.md'));
                return;
            }
            throw new Error('FS operation failed');
        })
    })
};

rename();
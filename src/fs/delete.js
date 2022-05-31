import { join, resolve} from 'path';
import { unlink } from 'fs/promises';

export const remove = async () => {
    const dir = join(resolve(), 'files', 'fileToRemove.txt');
    try {
        await unlink(dir);
    } catch {
        throw new Error('FS operation failed');
    }
};

remove();
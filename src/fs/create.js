import fs from 'fs';
import path from 'path';

export const create = async () => {
    const dir = path.join(path.resolve(), 'files', 'fresh.txt');
    fs.access(dir, (err) => {
        if (err) throw err;//new Error('FS operation failed');
        fs.promises.writeFile(dir, 'I am fresh and young', { encoding: 'utf-8', });
    })
    // const writer = fs.createWriteStream(dir , 'utf-8');
    // const pwriter = fs.promises.writeFile(dir, 'I am fresh and young', { encoding: 'utf-8', })
    // writer.write('I am fresh and young');
};

create();
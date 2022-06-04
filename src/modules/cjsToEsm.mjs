import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
await import('./files/c.js');
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'a.json'), { encoding: 'utf-8' }));
} else {
    unknownObject = JSON.parse(await readFile(path.join(path.dirname(fileURLToPath(import.meta.url)), 'files', 'b.json'), { encoding: 'utf-8' }));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};


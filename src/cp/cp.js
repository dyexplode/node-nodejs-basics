import path from 'path';
import { fileURLToPath } from 'url';
import child_process from 'child_process';

export const spawnChildProcess = async (args) => {
    // Get current directory
    const currDir = path.dirname(fileURLToPath(import.meta.url));
    // Fork new process from .js file
    const child = await child_process.fork(path.join(currDir, 'files', 'script.js'),
    [...args], { stdio: [0, 1, 2, 'ipc']});

   child.on('message', (data) => {
       console.log('data', data);
   });

   child.on('close', (code) => {
       console.log('code', code);
   })

//    setTimeout(() => child.send('jjj'), 100);
};

spawnChildProcess([1, 2, 3, 4, 5, 6, 7, 8, 9]);
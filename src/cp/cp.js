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

   child.on('data', (data2) => {
       console.log('data2', data2);
   })

   child.on('close', (code) => {
       console.log('code', code);
   })
   child.send('jjj');
};

spawnChildProcess([3, 3,4,5,6,7,8,9]);
import path from 'path';
import { fileURLToPath } from 'url';
import child_process from 'child_process';
import { stdin as input} from 'process';

export const spawnChildProcess = async (args) => {
    // Get current directory
    const currDir = path.dirname(fileURLToPath(import.meta.url));
    // Fork new process from .js file
    const child = await child_process.fork(path.join(currDir, 'files', 'script.js'),
    [...args], { stdio: [0, 1, 2, 'ipc']});

   child.on('message', (data) => {
       console.log(`(MAIN) --> Recive from CHILD process: ${data}`);
   });

   child.on('close', (code) => {
       console.log('(MAIN) --> CHILD process exit with code:', code);
       process.exit(0);
   })

   input.on('data', (data) => {
       console.log('(MAIN) --> Input to main process from stdin: ', data.toString());
       child.send(data.toString());
   })


};

spawnChildProcess([1, 2, 3, 4, 5, 6, 7, 8, 9]);
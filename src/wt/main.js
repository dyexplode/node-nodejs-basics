import { Worker } from 'worker_threads';
import path from 'path';
import { cpus } from 'os';
import { fileURLToPath } from 'url';

export const performCalculations = async () => {
    const cpuCount = cpus().length;
    const result = [];
    const wPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'worker.js');
    let i = 0;
    while( i < cpuCount){
        const runPromis = new Promise((success, error) => {
            const worker = new Worker(wPath, { workerData: 10 + i });
            worker.on('message', (data) => {
                success(data);
            })
            worker.on('error', () => {
                error(null);
            })
        }).then((data) => {
            result.push({ 'status': 'resolved', 'data': data });
        }).catch((data) => {
            result.push({'status': 'error', 'data': data});
        });
        await runPromis;
        i++;
    };
    return result;
};

console.log(await performCalculations());
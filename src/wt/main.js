import { Worker } from 'worker_threads';
import path from 'path';
import { cpus } from 'os';

export const performCalculations = async () => {
    const cpuCount = await cpus().length;
    console.log('cpu count: ', cpuCount);
    const wPath = path.join(path.resolve(), 'worker.js');
    for (let i = 0; i < cpuCount; i++){
        const worker = new Worker(wPath, { workerData: 10 + i });
        worker.on('message', (data) => {
            console.log(data);
        })
    }

};

performCalculations();
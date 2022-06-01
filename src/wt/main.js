import { Worker } from 'worker_threads';
import path from 'path';

export const performCalculations = async () => {
    const wPath = path.join(path.resolve(), 'worker.js');
    const worker = new Worker(wPath, { workerData: 10 });
    worker.on('exit', () => {
        console.log('stoped');
    })
    // console.log(worker);

    worker.on('message', (data) => {
        console.log(data);
    })

};

performCalculations();
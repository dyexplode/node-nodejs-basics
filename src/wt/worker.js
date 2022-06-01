import { parentPort } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.on('message', () => {
        const nth = 13;
        parentPort.postMessage({ nth });
    });
    
    // This function sends result of nthFibonacci computations to main thread
};

sendResult();
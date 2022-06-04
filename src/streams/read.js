import { createReadStream } from 'fs';
import { stdout } from 'process';
import path from 'path';

export const read = async () => {
    const file = createReadStream(path.join(path.resolve(), 'files', 'fileToRead.txt'), { encoding: 'utf-8' });
    
    // Use pipe
    file.pipe(stdout);
    
    // Without pipe
    // file.on('readable', () => {
    //     const data = file.read(); 
    //     if (data) stdout.write(data);
    //  })
    
    // Add return after cancel file
    file.on('end', () => {
        stdout.write('\n');
    })
};

read();
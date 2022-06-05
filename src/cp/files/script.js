const argus = process.argv.slice(2);

console.log(`Total number of arguments is ${argus.length}`);
console.log(`Arguments: ${JSON.stringify(argus)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);
// process.on('message', (dann) => {
//     process.stdout.write(`Sent from Message IPC: ${dann}\n`);
// })
const argus = process.argv.slice(2);

console.log(`(CHILD) --> Total number of arguments is ${argus.length}`);
process.send(`(CHILD) --> Total number of arguments is ${argus.length}`);
console.log(`(CHILD) --> Arguments: ${JSON.stringify(argus)}`);
process.send(`(CHILD) --> Arguments: ${JSON.stringify(argus)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`(CHILD) --> Received from master process: ${chunk.toString()}\n`);
    process.send(`(CHILD) --> Received from master process: ${chunk.toString()}\n`);
};

//process.stdin.on('data', echoInput);
process.on('message', echoInput);
import fs from 'fs'
export const write = async () => {
    const writeStream = fs.createWriteStream('./files/fileToWrite.txt');
    console.log('write information');
    process.stdin.on('data', (value) => {
        writeStream.write(value);
        console.log('Written');
        process.exit()
    })
};

write()
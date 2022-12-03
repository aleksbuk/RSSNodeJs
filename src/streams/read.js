import fs from 'fs';

export const read = async () => {
    let fileData = [];
    const readStream = fs.createReadStream('./files/fileToRead.txt');
    readStream.on('data', (chunk) => {
        fileData.push(chunk.toString())
    });
    readStream.on('end', () => process.stdout.write(fileData.join('')))

};
read()
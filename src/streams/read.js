import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const read = async () => {
    let fileData = [];
    const readStream = fs.createReadStream(
        path.join(__dirname, 'files/fileToRead.txt')
    );
    readStream.on('data', (chunk) => {
        fileData.push(chunk.toString());
    });
    readStream.on('end', () => process.stdout.write(fileData.join('')));
};
read();
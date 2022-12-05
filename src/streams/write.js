import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const write = async () => {
    const writeStream = fs.createWriteStream(
        path.join(__dirname, './files/fileToWrite.txt')
    );
    console.log('write information');
    process.stdin.on('data', (value) => {
        writeStream.write(value);
        console.log('Written');
        process.exit();
    });
};

write();
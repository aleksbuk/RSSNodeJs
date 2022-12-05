import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToRead.txt');

export const read = async () => {
    fs.readFile(filePath)
        .then((data) => console.log(data))
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

read();
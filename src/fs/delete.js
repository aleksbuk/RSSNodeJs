import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToRemove.txt');

export const remove = async () => {
    fs.unlink(filePath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log('Delete File successfully.');
    });
};
remove();

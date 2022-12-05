import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, './files');

export const list = async () => {
    fs.readdir(folderPath)
        .then((files) => console.log(files))
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

list();
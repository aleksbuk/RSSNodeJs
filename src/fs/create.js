import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fresh.txt');

export const create = async () => {
    fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' })
        .then(() => console.log('Saved!'))
        .catch(() => {
            throw new Error('FS operation failed');
        });
};
create();

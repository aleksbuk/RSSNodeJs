import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, './files/wrongFilename.txt');
const outputPath = path.join(__dirname, './files/properFilename.md');

export const rename = async () => {
    fs.rename(inputPath, outputPath)
        .then(() => console.log('Rename have done'))
        .catch(() => {
            throw new Error('FS operation failed');
        });
};
rename();
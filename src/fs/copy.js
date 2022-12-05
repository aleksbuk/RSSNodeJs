import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const source = path.join(__dirname, './files');
const destination = path.join(__dirname, './files_copy');
export const copy = async () => {
    const copy = (input, output) => {
        fs.copyFile(input, output).catch(() => {
            throw new Error('FS operation failed');
        });
    };
    fs.readdir(source)
        .then((files) => {
            fs.mkdir(destination)
                .then(() => {
                    files.forEach((el) => {
                        const fileInput = source + '/' + el;
                        const fileOutput = destination + '/' + el;
                        copy(fileInput, fileOutput);
                    });
                })
                .catch(() => {
                    throw new Error('FS operation failed');
                })
                .finally(() => console.log('Copied'));
        })
        .catch(() => {
            throw new Error('FS operation failed');
        });
};

copy();
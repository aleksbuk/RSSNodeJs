import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const compress = async () => {
    const input = fs.createReadStream(
        path.join(__dirname, './files/fileToCompress.txt')
    );
    const output = fs.createWriteStream('./files/archive.gz');
    input.pipe(zlib.createGzip()).pipe(output);
    console.log('compressed to archive.gz');
};
compress();
import fs from 'fs/promises'

export const read = async () => {
    fs.readFile('./files/fileToRead.txt', 'utf8')
        .then((data) => console.log(data))
        .catch(() => {
            throw new Error('FS operation failed')
        })
};

read()
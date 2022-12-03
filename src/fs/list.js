import fs from 'fs/promises'
export const list = async () => {
    fs.readdir('./files')
        .then((files)=> console.log(files))
        .catch(() => {
            throw new Error('FS operation failed')
        })
};

list()
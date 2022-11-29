import fs from 'fs/promises'

export const rename = async () => {
    fs.rename('./files/wrongFilename.txt', './files/wrongFilename.txt')
        .then(() => console.log('Rename have done'))
        .catch(() => {
                throw new Error('FS operation failed')
        });
};
rename()
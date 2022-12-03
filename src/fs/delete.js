import fs from 'fs';

export const remove = async () => {
    fs.unlink('./files/fileToRemove.txt', (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log("Delete File successfully.");
    })
};
remove()
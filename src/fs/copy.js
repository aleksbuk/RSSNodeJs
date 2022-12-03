import fs from 'fs/promises'

const source = './files'
const destination = './files_copy'

export const copy = async () => {
   const copy = (input, output) => {
      fs.copyFile(input, output).catch(() =>{
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
                    copy(fileInput, fileOutput)
                 })
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

copy()
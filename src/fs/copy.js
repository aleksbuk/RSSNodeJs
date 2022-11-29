import fs from 'fs/promises'

const source = './files'
const destination = './files_copy'

export const copy = async (source, destination) => {
   fs.copy(source, destination, function (err) {
      if(err) {
         console.log('FS operation failed')
      }
      console.log('copied')
   })
};

copy(source, destination)
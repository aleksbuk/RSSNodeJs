import fs from 'fs/promises'

export const create = async () => {
    fs.writeFile('files/fresh.txt', 'I am fresh and young', {flag: 'wx'})
        .then(() => console.log('Saved'))
        .catch(() => {
        throw new Error('FS operation failed')
    });
}
await create()


import { Transform } from 'stream'

const transformeSteam = new Transform({
    transform(chunk, enc, cb) {
        cb(
            null,
            chunk.toString().split('').reverse().join('').trim()
        );
        process.exit()
    },
})

export const transform = async () => {
   console.log('Enter something')
    process.stdin.pipe(transformeSteam).pipe(process.stdout);
};

transform()
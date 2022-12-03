export const parseArgs = () => {
    const argv = process.argv
    for (let i = 2; i < argv.length; i++) {
        console.log(argv[i].substr(2) + ' is ' + argv[i + 1]);
        i++;
    }
};

parseArgs()
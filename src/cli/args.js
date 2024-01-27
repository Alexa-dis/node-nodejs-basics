const parseArgs = () => {
    process.argv.map((el, i) => {
        if (el.startsWith("--")) {
            console.log(`${el.slice(2)} is ${process.argv[i + 1]}`)
        }
    })
};

parseArgs();
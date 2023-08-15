
const error = (str) => {
    console.log('\x1b[31m%s\x1b[0m', str);
}

const success = (str) => {
    console.log('\x1b[32m%s\x1b[0m', str);
}

const warn = (str) => {
    console.log('\x1b[33m%s\x1b[0m', str);
}

const log = {
    error,
    success,
    warn
}
module.exports = log
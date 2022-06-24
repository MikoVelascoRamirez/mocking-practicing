const fs = require('fs');

const getFilesInDirectorySync = url => fs.readdirSync(url);

const summarizeFilesInDirectorySync = directory => {
    return getFilesInDirectorySync(directory).map(fileName => ({
        directory,
        fileName
    }))
}

module.exports.getFilesInDirectorySync = getFilesInDirectorySync;
module.exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
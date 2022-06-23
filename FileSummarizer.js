const fs = require('fs');

const getFilesInDirectorySync = url => fs.readdirSync(url);

module.exports.getFilesInDirectorySync = getFilesInDirectorySync;
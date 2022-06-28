const path = require('path');
const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create({});

const __setMockFiles = (newMockFiles) => {
    for(const file in newMockFiles){
        const dir = path.dirname(file); //Returns the path
        if(!mockFiles[dir]){
            mockFiles[dir] = [];
        }
        mockFiles[dir].push(path.basename(file)) //Returns the last part : filename
    }

    return mockFiles;
}

const readdirSync = path => mockFiles[path] || [];

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;
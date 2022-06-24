const path = require('path');
const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create({});

const __setMockFiles = (newMockFiles) => {
    for(const file in newMockFiles){
        const dir = path.dirname(file);
        if(!mockFiles[dir]){
            mockFiles[dir] = [];
        }
        mockFiles[dir].push(path.basename(file))
    }

    return mockFiles;
}

fs.__setMockFiles = __setMockFiles;

module.exports = fs;
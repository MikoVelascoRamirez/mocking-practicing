jest.mock('fs');

describe("Tests for mocking module fs", () => {
    
    const MOCKED_FILE_INFO = {
        '/path/to/file1.js': 'console.log("file1 contents");',
        '/path/to/file2.txt': 'file2 contents',
    }

    it("1. Mocking files", () => {
        const mockedFiles = require('fs').__setMockFiles(MOCKED_FILE_INFO);
        expect(mockedFiles).toEqual({
            '/path/to' : ['file1.js', 'file2.txt']
        })
    })
});
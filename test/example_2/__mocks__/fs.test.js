jest.mock('fs');

const fs = require('fs');

describe("Tests for mocking module fs", () => {
    
    const MOCKED_FILE_INFO = {
        '/path/to/file1.js': 'console.log("file1 contents");',
        '/path/to/file2.txt': 'file2 contents',
    }

    it("1. Mocking files", () => {
        const mockedFiles = fs.__setMockFiles(MOCKED_FILE_INFO);
        expect(mockedFiles).toEqual({
            '/path/to' : ['file1.js', 'file2.txt']
        })
    })

    it("2. Reading files", () => {
        const route = {
            '/home/miko/Descargas/Postman/Postman' : 'uwu',
            '/home/miko/Descargas/Postman/app' : 'uwu',
            '/home/miko/Descargas/Postman/log.txt' : 'uwu'
        }
        fs.__setMockFiles(route);
        const getFiles = fs.readdirSync('/home/miko/Descargas/Postman'); 
        expect(getFiles).toEqual(expect.arrayContaining(['Postman', 'app', 'log.txt']));
    });
});
const { getFilesInDirectorySync, summarizeFilesInDirectorySync } = require('../FileSummarizer');

describe("Tests to manage files in a directory", () => {
    it("1. Getting a summary files in a specific directory", () => {
        const summarizzingFiles = getFilesInDirectorySync('/home/miko/Descargas/Postman');
        const recieved = [ 'Postman', 'app', 'log.txt' ];
        
        expect(summarizzingFiles).not.toHaveLength(0);
        expect(summarizzingFiles).toHaveLength(3);
        expect(summarizzingFiles.constructor).toBeTruthy();
        expect(summarizzingFiles).toEqual(expect.arrayContaining(recieved));
    });

    it("2. Summary files in a directory", () => {
        const summary = summarizeFilesInDirectorySync('/home/miko/Descargas/Postman');
        const recieved = [
            { directory: '/home/miko/Descargas/Postman', fileName: 'Postman' },
            { directory: '/home/miko/Descargas/Postman', fileName: 'app' },
            { directory: '/home/miko/Descargas/Postman', fileName: 'log.txt' }
        ]
        expect(summary).toEqual(expect.arrayContaining(recieved));
    })

});
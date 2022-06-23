const { getFilesInDirectorySync } = require('../FileSummarizer');

it("1. Getting a summary files in a specific directory", () => {
    const summarizzingFiles = getFilesInDirectorySync('/home/miko/Descargas/Postman');
    const recieved = [ 'Postman', 'app', 'log.txt' ];
    
    expect(summarizzingFiles).not.toHaveLength(0);
    expect(summarizzingFiles).toHaveLength(3);
    expect(summarizzingFiles.constructor).toBeTruthy();
    expect(summarizzingFiles).toEqual(expect.arrayContaining(recieved));
});
jest.mock('../http')

const { loadTitle } = require('../app')

describe("Tests for main application", () => {
    test("1. Checking if the meesage is DELECTUS AUT AUTEM", () => {
        loadTitle().then(title => {
            expect(title).toBe("DELECTUS AUT AUTEM")
        })
        
    })
})
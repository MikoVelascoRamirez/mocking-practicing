const fetchData = require('./http') 

const loadTitle = () => {
    return fetchData()
        .then(extractedData => {
            const title = extractedData.title;
            const uppercase = title.toUpperCase();
            return uppercase;
        })
}

const printTitle = () => {
    loadTitle().then(title => title)
};

module.exports = {
    loadTitle,
    printTitle
};
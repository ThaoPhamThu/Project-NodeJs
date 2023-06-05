
const getHomePage = (req, res) => {
    return res.send('Hello Word');
};

const getTest = (req, res) => {
    return res.render('sample.ejs');
};

module.exports = {
    getHomePage,
    getTest,
}
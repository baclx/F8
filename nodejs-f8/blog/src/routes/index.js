const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    // route
    /* app.get('/', (req, res) => {
        res.render('home'); // get home dua vao body o main
    }) */
    
    /* app.get('/news', (req, res) => {
        res.render('news'); // get news dua vao body o resources/views/layouts/main
    }) */

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route
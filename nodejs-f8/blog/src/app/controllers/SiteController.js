const Course = require('../models/Course')


class SiteController {

    // [GET] /news
    index(req, res) {

        Course.find({}, function (err, courses) {
            if(!err) {
                res.json(courses);
            } else {
                res.status(400).json( {error: 'ERORR'} );
            }
            
        });


        //res.render('home');
    }

}

module.exports = new SiteController;


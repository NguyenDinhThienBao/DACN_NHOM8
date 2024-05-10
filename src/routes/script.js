const nhanSuRouter = require('./employee');
function route(app) {
    app.use('/', nhanSuRouter); //dùng router nhanSuRouter


}

module.exports = route;
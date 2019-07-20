var authors = require('../controllers/authors.js');
module.exports = function(app){
    app.get('/author', authors.all)
    app.post('/add/author',authors.create)
    app.get('/delete/author',authors.delete)
    app.post('/edit/author/:id', authors.edit)
}
// collections
var mongoose = require('mongoose');
require('../config/mongoose');
var authorSchema = new mongoose.Schema({
    name: {type: String, required: true}
})
mongoose.model('Authors', authorSchema);

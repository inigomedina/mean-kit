var mongoose = require('mongoose');

module.exports = mongoose.model('Darwin', {
    name : {type : String, default: ''}
});

var mongoose = require('mongoose');

var WebsiteAliasSchema = new mongoose.Schema({
    website_name: String,
    url_aliases: [String]
})

module.exports = mongoose.model('WebsiteAlias', WebsiteAliasSchema);
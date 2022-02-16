var mongoose = require('mongoose');

var AffiliateLinkSchema = new mongoose.Schema({
    url: String,
    charity: String,
    website_name: String,
})

module.exports = mongoose.model('WebsiteAlias', WebsiteAliasSchema);
const HandlerService = require('./handler.service');
const ParsingService = require('./parsing.service');
const QueryService = require('./query.service');

/**
 * Export singleton services
 */
const services = {
    handler: new HandlerService(),
    parsing: new ParsingService(),
    querying: new QueryService()
};

module.exports = services;
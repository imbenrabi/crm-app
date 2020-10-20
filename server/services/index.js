const HandlerService = require('./handler.service');
const ParsingService = require('./parsing.service');

/**
 * Export singleton services
 */
const services = {
    handler: new HandlerService(),
    parsing: new ParsingService()
};

module.exports = services;
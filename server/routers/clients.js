// import express from 'express';
// import { User } from '../models/user'
// import { handleMongoResp } from "../services/mongoResp.service";
const express = require('express');

class ClientsRouter {

    constructor(services) {
        this.prefix = 'clients';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting clients router...');
        this.express.route('/:filter?/:text?').get(async (req, res, next) => {
            try {
                console.log(req.query);
                if (req.query.filter && req.query.text) {
                    console.log(`Searching... column: ${req.query.filter}, text: ${req.query.text}`);
                    const searchResults = await this.services.querying.searchClients(req.query.filter, req.query.text);
                    return next({ status: 200, data: searchResults });
                } else {
                    console.log('Fetching all clients...');
                    const clients = await this.services.querying.getAllClients();
                    return next({ status: 200, data: clients });
                }
            } catch (e) {
                console.log(e);
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });
        this.express.route('/client').post(async (req, res, next) => {
            try {
                console.log('Adding a new client...');
                let client = req.body;
                const newClient = await this.services.querying.addClient(client);
                return next({ status: 201, data: newClient });
            } catch (e) {
                console.log(e);
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });
        this.express.route('/client').put(async (req, res, next) => {
            try {
                console.log('deleting...');
                res.send('deleted')
            } catch (e) {
                let content = this.services.parsing.parseError(e);
                return next(content);
            }
        });

    }

}

module.exports = ClientsRouter;
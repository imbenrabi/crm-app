const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const services = require('./services');
const routers = require('./routers');

class Server {
    /**
     * @param routers - Router Class (See router folder)
     * @param services - All exported services object, for manual DI (See services folder)
     */
    constructor(routers, services) {
        this.PORT = process.env.PORT || 8080;
        this.express = express();
        this.routers = routers;
        this.services = services;
        this.init();
        /**uncomment the line below to serve the react app production build using the server */
        // this.express.use(express.static(path.join(__dirname, '../build')))
    }

    init() {
        console.log('Starting CRM server...');
        this.initDatabase();
        this.initMiddlewares();
        this.initRouters();
        this.initHandlers();
    }

    initDatabase() {
        console.log('Connecting to database...');
        const sequelize = require('./db/sequelize');

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection to database has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            })
    }

    initMiddlewares() {
        console.log('Starting middleware...');
        this.express.use(bodyParser.json()); // for parsing application/json
        this.express.use(compression()); // compress all responses
    }

    initRouters() {
        console.log('Starting routers...');
        for (const i in this.routers) {
            /**
             * Pass all services to router for DI
             */
            const Router = this.routers[i];
            const router = new Router(this.services);
            this.express.use(`/${router.prefix}`, router.express);
        }
    }

    initHandlers() {
        this.express.use(this.services.handler.handleData);
        this.services.handler.handleGlobalErrors();
    }

    start() {
        this.express.listen(this.PORT, () => {
            console.log(`App listening to ${this.PORT}....`);
            console.log('Press Ctrl+C to quit.')
        });
    }
}

const server = new Server(routers, services);
server.start();


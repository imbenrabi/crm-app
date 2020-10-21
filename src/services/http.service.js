export class HttpService {

    getClients = async () => {
        let data = require('../data.json')
        const clients = data.map(({ _id: id, ...rest }) => ({ id, ...rest }));
        return clients
    }
}
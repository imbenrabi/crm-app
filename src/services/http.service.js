export class HttpService {
    async getClients() {
        let data = require('../data.json')
        const clients = data.map(({ _id: id, ...rest }) => ({ id, ...rest }));
        return clients
    }
    async updateClient() {
        console.log('Client updated');
    }
    async addClient() {
        console.log('Client added');
    }
}
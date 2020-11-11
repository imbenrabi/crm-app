import axios from 'axios';

export class HttpService {
    async getClients() {
        try {
            const resp = await axios.get('/clients');
            const clients = resp.data.data;
            return clients
        } catch (error) {
            throw error;
        }
    }
    async updateClient() {
        console.log('Client updated');
    }
    async addClient() {
        console.log('Client added');
    }
}
import { observable, action, computed, makeAutoObservable, makeObservable } from 'mobx'
import { Client } from './Client'
import { services } from '../../services';



export class ClientStore {
    clients = [];
    constructor(clients) {
        makeObservable(this, {
            clients: observable,
            addClient: action,
            editClient: action,
            getClients: action,
            numClients: computed
        })
        this.clients = clients
    }
    getClients = async () => {
        const clientsList = await services.httpService.getClients();
        this.clients = clientsList;
    }
    addClient = (client) => {
        this.clients.push(new Client(client));
    }
    editClient = (id, update) => {
        const client = this.clients.find(c => c.id = id);
        client[update.key] = update.value;
    }
    get numClients() {
        return this.clients.length;
    }
}


import { observable, action, computed, makeAutoObservable, makeObservable } from 'mobx'
import { Client } from './Client'



export class ClientStore {
    clients = [];
    constructor() {
        makeObservable(this, {
            clients: observable,
            addClient: action,
            editClient: action,
            numClients: computed
        })
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


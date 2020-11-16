import { observable, action, computed, makeAutoObservable, makeObservable } from 'mobx'
import { Client } from './Client'
import { services } from '../services';

const CURRENT_YEAR = '2018';

export class ClientStore {
    clients = [];
    constructor() {
        makeObservable(this, {
            clients: observable,
            addClient: action,
            editClient: action,
            getClients: action,
            numClients: computed,
            newClients: computed,
            emailsSent: computed,
            outstandingClients: computed,
            hottestCountry: computed
        })

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
    get newClients() {
        return this.clients.filter(c => c.firstContact.split('-')[0] === CURRENT_YEAR).length;
    }
    get emailsSent() {
        return this.clients.filter(c => c.emailType !== null).length;
    }
    get outstandingClients() {
        return this.clients.filter(c => c.sold !== 1).length;
    }
    get hottestCountry() {
        const countryRanks = {};
        let topCountry = { country: '', count: 0 };
        this.clients.forEach(client => {
            countryRanks[client.countryName] ? countryRanks[client.countryName]++ : countryRanks[client.countryName] = 1
        })
        Object.keys(countryRanks).forEach(country => countryRanks[country] > topCountry.count ? topCountry = { country, count: countryRanks[country] } : null)
        return topCountry.country
    }
}


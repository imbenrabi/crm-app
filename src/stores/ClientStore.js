import { observable, action, computed, makeObservable } from 'mobx'
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
            hottestCountry: computed,
            salesPerSalesperson: computed,
            salesCountryDist: computed,
            contactsPerDate: computed,
            salesPerEmail: computed
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
        [...this.clients].forEach(client => {
            countryRanks[client.countryName] ? countryRanks[client.countryName]++ : countryRanks[client.countryName] = 1
        })
        Object.keys(countryRanks).forEach(country => countryRanks[country] > topCountry.count ? topCountry = { country, count: countryRanks[country] } : null);
        return topCountry.country
    }
    get salesPerSalesperson() {
        let aggregation = {};
        [...this.clients].forEach(client => {
            aggregation[client.ownerName] ? aggregation[client.ownerName] += client.sold : aggregation[client.ownerName] = client.sold;
        })
        const salesByName = [];
        Object.keys(aggregation).forEach((owner) => {
            salesByName.push({ name: owner.split(' ')[0], sales: aggregation[owner] })
        });
        return salesByName;
    }
    get salesCountryDist() {
        let aggregation = {};
        [...this.clients].forEach(client => {
            aggregation[client.countryName] ? aggregation[client.countryName] += client.sold : aggregation[client.countryName] = client.sold;
        })
        const salesByCountry = [];
        Object.keys(aggregation).forEach((country) => {
            salesByCountry.push({ country, sales: aggregation[country] })
        });
        return salesByCountry;
    }
    get contactsPerDate() {
        let aggregation = {};
        [...this.clients].forEach(client => {
            aggregation[client.firstContact.slice(0, -3)] ? aggregation[client.firstContact.slice(0, -3)]++ : aggregation[client.firstContact.slice(0, -3)] = 1;
        })
        const contactsPerDate = []
        Object.keys(aggregation).forEach((date) => {
            contactsPerDate.push({ date, count: aggregation[date] })
        });
        return contactsPerDate;
    }
    get salesPerEmail() {
        let aggregation = {};
        [...this.clients].forEach(client => {
            if (client.sold === 1) {
                aggregation[client.emailType] ? aggregation[client.emailType]++ : aggregation[client.emailType] = 1;
            }
        })
        const salesPerEmail = [];
        Object.keys(aggregation).forEach((type) => {
            salesPerEmail.push({ type, count: aggregation[type] })
        });
        return salesPerEmail;
    }
}


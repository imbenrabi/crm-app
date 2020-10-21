import { observable, makeObservable } from 'mobx'

export class Client {
    name;
    surname;
    country;
    firstContact;
    email;
    sold;
    owner;
    constructor(client) {
        makeObservable(this, {
            name: observable,
            surname: observable,
            country: observable,
            firstContact: observable,
            email: observable,
            sold: observable,
            owner: observable
        })
        this.name = client.name;
        this.surname = client.surname;
        this.country = client.country;
        this.firstContact = client.firstContact;
        this.email = client.email;
        this.sold = client.sold;
        this.owner = client.owner;
    }
}

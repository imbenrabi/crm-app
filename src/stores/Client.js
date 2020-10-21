import { observable, makeObservable } from 'mobx'

export class Client {
    id;
    name;
    surname;
    country;
    firstContact;
    email;
    sold;
    owner;
    constructor(client) {
        makeObservable(this, {
            id: observable,
            name: observable,
            surname: observable,
            country: observable,
            firstContact: observable,
            email: observable,
            sold: observable,
            owner: observable
        })
        this.id = client._id;
        this.name = client.name;
        this.surname = client.surname;
        this.country = client.country;
        this.firstContact = client.firstContact;
        this.email = client.email;
        this.sold = client.sold;
        this.owner = client.owner;
    }
}

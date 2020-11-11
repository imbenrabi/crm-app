const { QueryTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class QueryService {
    async getClients() {
        try {
            const clients = await sequelize.query("SELECT * FROM `client`", { type: QueryTypes.SELECT });
            return clients;
        } catch (error) {
            throw error
        }
    }
    async addClient(client) {
        try {
            let ownerData = await sequelize.query(`SELECT id FROM owner WHERE name = '${client.owner}'`);
            let countryData = await sequelize.query(`SELECT id FROM country WHERE name = '${client.country}'`);
            let emailTypeData = await sequelize.query(`SELECT id FROM email_type WHERE type  = '${client.emailType}'`);
            let ownerId = ownerData[0][0].id //assuming names are unique
            let countryId = countryData[0][0].id //remember tha we receive both an array of results and our metadata, hence the [0][0]
            let emailTypeId = emailTypeData[0][0].id
            let sold = client.sold ? 1 : 0
            let date = client.firstContact

            if (!(ownerId && countryId && emailTypeId)) {
                return console.log('Failed to add client. Check owner / country / email type...');
            }

            sequelize.query(`
           INSERT INTO client(id, name, email, sold, first_contact, email_type_id, country_id, owner_id)
            VALUES (${null}, "${client.name}", "${client.email}", ${sold}, "${date}", ${emailTypeId}, ${countryId}, ${ownerId})`)

        } catch (error) {
            throw error
        }
    }
    async updateClient(client) {
        try {

        } catch (error) {

        }
    }
}

module.exports = QueryService;

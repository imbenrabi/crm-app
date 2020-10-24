const data = require('../../../src/data.json');
const sequelize = require('../sequelize');

const getStaticDataPoints = (data) => {
    const countries = {}
    const owners = {}

    data.forEach(d => {
        if (!owners[d.owner]) { owners[d.owner] = true }
        if (!countries[d.country]) { countries[d.country] = true }
    })
    return { countries, owners }
}

const insertClient = async function (client) {
    let ownerData = await sequelize.query(`SELECT id FROM owner WHERE name = '${client.owner}'`);
    let countryData = await sequelize.query(`SELECT id FROM country WHERE name = '${client.country}'`);
    let emailTypeData = await sequelize.query(`SELECT id FROM email_type WHERE type  = '${client.emailType}'`);
    let ownerId = ownerData[0][0].id //assuming names are unique
    let countryId = countryData[0][0].id //remember tha we receive both an array of results and our metadata, hence the [0][0]
    let emailTypeId = emailTypeData[0][0].id
    let sold = client.sold ? 1 : 0
    let date = client.firstContact.split('T')[0];

    if (!(ownerId && countryId && emailTypeId)) { return }

    sequelize.query(`
       INSERT INTO client(id, name, email, sold, first_contact, email_type_id, country_id, owner_id)
        VALUES (${null}, "${client.name}", "${client.email}", ${sold}, "${date}", ${emailTypeId}, ${countryId}, ${ownerId})`)
}
for (const client of data) {
    insertClient(client);

}



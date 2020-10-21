export const getClients = () => {
    setTimeout(() => {
        let data = require('../data.json')
        return data;
    }, 100)
}
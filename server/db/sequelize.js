const Sequelize = require('sequelize');

// const sequelize = new Sequelize('mysql://YOUR_USER:YOUR_PASSWORD@YOUR_HOST/YOUR_DB_NAME');
const sequelize = new Sequelize(process.env.MYSQL_CONNECTION_URL);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })
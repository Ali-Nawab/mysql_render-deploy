const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: 'mysql',
    logging: console.log
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({ alter: true })
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const dropDatabase = async () => {
    try {
        await sequelize.query("DROP DATABASE bh2kyejopvb2pbhqrk3v;");
        console.log("Database deleted successfully!");
    } catch (error) {
        console.error("Error deleting database:", error);
    } finally {
        await sequelize.close();
    }
};

// dropDatabase();
module.exports = {sequelize,  testConnection }
const {Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    "password",
    {
        host: "localhost",
        dialect: "postgres"
    }
)

sequelize.sync();

(async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Conection established with DB");
    } catch (error) {
        console.log("Unable to connect with db");
    }
})();

module.exports = sequelize;
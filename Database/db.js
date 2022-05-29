const Sequelize = require('Sequelize');
const db = {};

try {
     const sequelize = new Sequelize('test_db','root','root',{
         host: 'localhost',
         dialect : 'mysql'
     })

     db.sequelize = sequelize;
     db.Sequelize = Sequelize;

} catch (error) {
    console.log(error);
}

module.exports = db ;

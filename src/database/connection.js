var knex = require('knex')({
    client: 'mysql',
    connection:{
        host: '45.132.157.103',
        user: 'u981546547_informatica',
        password: 'Isr@el123',
        database: 'u981546547_biblioteca1'
    }
});
module.exports = knex
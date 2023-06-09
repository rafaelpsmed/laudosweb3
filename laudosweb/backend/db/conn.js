const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/laudosweb')
    // await mongoose.connect('mongodb://127.0.0.1/laudosweb')
    console.log('conectado ao bando de dados Mongodb');
}

main().catch((err) => console.log(err));

module.exports = mongoose
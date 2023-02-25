const app = require('./app');
const config = require('./app/config/index');
const MongDB = require('./app/untils/mongdb.until');

async function startServer() {
    try {
        await MongDB.connect(config.db.uri);
        console.log('Connected to the database');

        const PORT = config.app.port;
        app.listen(PORT, ()=>{
                console.log(`Server running is http://localhost:${PORT}`);
            })            
    } catch (error) {
        console.log('Connect can not database!!',error);
        process.exit();
    }
}

startServer();

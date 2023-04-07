const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./app/config');
const MongoDB = require('./app/utils/mongodb.util');

const contactRouter = require('./app/routers/contact.route')
const ApiError = require('./app/api-error');


app.use(cors());
app.use(express.json());

// call api
app.use('/api/contacts',contactRouter)

app.use('/',(req,res)=>{
    res.send('helo');
})
// error 
app.use((req, res, next) => {   
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {  
    return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
});


async function  startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database");

        const PORT = config.app.port
        app.listen(PORT, () =>
            console.log(`App listening at http://localhost:${PORT}`),
        );
    } catch (error) {
        console.log("cannot connect database",error);
        process.exit();
    }
}

startServer();
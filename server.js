const express = require('express');
const cors = require('cors');
const app = express();
const contactRouter = require('./app/routers/contact.route')
const ApiError = require('./app/api-error');
// const db = require('./database/db');

// db 
// db.connect();
// port
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

// call api
app.use('/api/contacts',contactRouter)

// error 
app.use((req, res, next) => {   
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {  
    return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
});

app.use('/',(req,res)=>{
    res.send('helo');
})

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
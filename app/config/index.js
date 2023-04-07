const config = {
    app: {
        port: process.env.PORT || 3000
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://PTUDW:PTUDW123@cluster0.kymh8xx.mongodb.net/contactbook?retryWrites=true&w=majority"
    }
}

module.exports = config;
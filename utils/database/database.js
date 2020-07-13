const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//mongodbURL = 'mongodb+srv://omenranr:dopdop@doplid-gtvfn.mongodb.net/nodejstutorial?retryWrites=true&w=majority'
mongodbURL = "mongodb://localhost:27017/nodejs"

mongoose.connect(mongodbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(res => {
        console.log("Successfully connected to MongoDB.")
    }).catch(err => {
    console.log("Failed to connect to DB. Error : " + err)
})
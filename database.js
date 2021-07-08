const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/visionDB",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then((db) => {console.log('DB is conected');})
.catch((err) => console.log(err));
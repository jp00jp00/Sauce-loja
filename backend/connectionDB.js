const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sauce', {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
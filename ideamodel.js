const mongoose = require('mongoose')

const { Schema } = mongoose;

const Idea = new Schema({
    Team_name: {
        type: String,
        required: true,
    },
    Team_leadername: {
        type: String,
        required: true,
    },
    //WRITE SCHEMA FOR PPT 

});

module.exports = mongoose.model('Idea', IdeaSchema)